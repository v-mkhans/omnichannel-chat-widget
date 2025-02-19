/* eslint-disable @typescript-eslint/no-explicit-any */

import { LogLevel, TelemetryEvent } from "../../telemetry/TelemetryConstants";

import { IContextDataStore } from "../../interfaces/IContextDataStore";
import { TelemetryHelper } from "../../telemetry/TelemetryHelper";
import { inMemoryDataStore } from "./defaultInMemoryDataStore";

export const defaultClientDataStoreProvider = (cacheTtlinMins = 0): IContextDataStore => {
    let ttlInMs = 0;
    const isCookieAllowed = () => {
        try {
            localStorage;
            sessionStorage;
            return true;
        } catch (error) {
            if (!(window as any).TPCWarningShown) {
                console.warn("Third party cookies blocked.");
                (window as any).TPCWarningShown = true;
            }
            return false;
        }
    };

    if (ttlInMs == 0) {
        ttlInMs = cacheTtlinMins * 60 * 1000;
    }
    
    const dataStoreProvider = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setData: (key: any, data: any, type: any) => {
            if (isCookieAllowed()) {
                try {
                    if (key) {
                        const now = new Date();
                        const item = {
                            data: data,
                            expiry: now.getTime() + ttlInMs,
                        };
                        const strItem = JSON.stringify(item);

                        if (type === "localStorage") {
                            localStorage.setItem(key, strItem);
                        } else {
                            sessionStorage.setItem(key, strItem);
                        }
                    }
                } catch (error) {
                    TelemetryHelper.logConfigDataEvent(LogLevel.ERROR, {
                        Event: TelemetryEvent.ClientDataStoreProviderFailed,
                        ExceptionDetails: error,
                        Description: "Unable to store data in localStorage."
                    });
                }
            } else {
                const dataToCache = {
                    key: key,
                    data: data,
                    type: type
                };
                parent.postMessage(dataToCache, "*");
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getData: (key: any, type: any) => {
            if (isCookieAllowed()) {
                let item;
                if (type === "localStorage") {
                    item = localStorage.getItem(key);
                } else {
                    item = sessionStorage.getItem(key);
                }
                //Return item if not expired
                let itemInJson = undefined;
                if (item !== null) {
                    itemInJson = JSON.parse(item);
                    const now = new Date();
                    // compare the expiry time of the item with the current time
                    if (now.getTime() > itemInJson.expiry) {
                        // If the item is expired, delete the item from storage
                        // and return null
                        localStorage.removeItem(key);
                        return null;
                    }
                    return itemInJson.data;
                }
            } else {
                // get data from in memory db when cookie is disabled
                return inMemoryDataStore().getData(key);
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        removeData: (key: any, type: any) => {
            if (isCookieAllowed()) {
                if (key) {
                    if (type === "localStorage") {
                        return localStorage.removeItem(key);
                    } else {
                        return sessionStorage.removeItem(key);
                    }
                }
            } else {
                // get data from in memory db when cookie is disabled
                return inMemoryDataStore().removeData(key);
            }
        }
    };
    return dataStoreProvider;
};