import { TelemetryData } from "./definitions/Payload";

export enum ScenarioType {
    CONFIG_VALIDATION = "LCW_ConfigValidationEvents",
    LOAD = "LCW_LoadEvents",
    ACTIONS = "LCW_ActionEvents",
    SDK = "LCW_SDKEvents",
    IC3_CLIENT = "LCW_IC3ClientEvents",
    OCCHATSDK = "LCW_OCCHATSDKEvents",
    WEBCHAT = "LCW_WebChatEvents",
    CALLING = "LCW_Calling",
    UNDEFINED = "LCW_Undefined",
    ACS_ADAPTER = "LCW_ACSAdapterEvents"
}

export enum LogLevel {
    INFO = "INFO",
    DEBUG = "DEBUG",
    WARN = "WARN",
    ERROR = "ERROR"
}

// Events used in certain functionalities that are not being logged
export enum BroadcastEvent {
    LoadPostChatSurvey = "LoadPostChatSurvey",
    ChatEnded = "ChatEnded", // used for multitab notification when chat ended 
    NewMessageNotification = "NewMessageNotification",
    UnreadMessageCount = "UnreadMessageCount",
    StartProactiveChat = "StartProactiveChat",
    ProactiveChatStartChat = "ProactiveChatStartChat",
    ProactiveChatStartPopoutChat = "ProactiveChatStartPopoutChat",
    ProactiveChatIsInPopoutMode = "ProactiveChatIsInPopoutMode",
    ResetProactiveChatParams = "ResetProactiveChatParams",
    InvalidAdaptiveCardFormat = "InvalidAdaptiveCardFormat",
    NewMessageSent = "NewMessageSent",
    NewMessageReceived = "NewMessageReceived",
    HistoryMessageReceived = "HistoryMessageReceived",
    RedirectPageRequest = "RedirectPageRequest",
    StartChat = "StartChat",
    StartUnauthenticatedReconnectChat = "StartUnauthenticatedReconnectChat",
    InitiateEndChat = "InitiateEndChat",
    SetCustomContext = "SetCustomContext",
    ChatRetrievedFromCache = "ChatRetrievedFromCache",
    MaximizeChat = "MaximizeChat",
    ChatInitiated = "ChatInitiated",
    CloseChat = "CloseChat",
    InitiateEndChatOnBrowserUnload = "InitiateEndChatOnBrowserUnload",
    ClosePopoutWindow = "ClosePopoutWindow",
    RaiseErrorEvent = "RaiseErrorEvent",
    NetworkDisconnected = "NetworkDisconnected",
    NetworkReconnected = "NetworkReconnected"
}

// Events being logged
export enum TelemetryEvent {
    CallAdded = "CallAdded",
    LocalVideoStreamAdded = "LocalVideoStreamAdded",
    LocalVideoStreamRemoved = "LocalVideoStreamRemoved",
    RemoteVideoStreamAdded = "RemoteVideoStreamAdded",
    RemoteVideoStreamRemoved = "RemoteVideoStreamRemoved",
    CallDisconnected = "CallDisconnected",
    CallDisconnectedException = "CallDisconnectedException",
    IncomingCallEnded = "incomingCallEnded", //case sensitive
    VoiceVideoSdkInitialize = "VoiceVideoSdkInitialize",
    VoiceVideoSdkInitializeException = "VoiceVideoSdkInitializeException",
    VoiceVideoLoading = "VoiceVideoLoading",
    VoiceVideoNotLoaded = "VoiceVideoNotLoaded",
    VoiceVideoLoadingException = "VoiceVideoLoadingException",
    VoiceVideoAcceptCallException = "VoiceVideoAcceptCallException",
    VoiceVideoAcceptCallWithVideoException = "VoiceVideoAcceptCallWithVideoException",
    VideoCallAcceptButtonClick = "VideoCallAcceptButtonClick",
    VoiceCallAcceptButtonClick = "VoiceCallAcceptButtonClick",
    CallRejectClick = "CallRejectClick",
    CallRejectClickException = "CallRejectClickException",
    ToggleMuteButtonClick = "ToggleMuteButtonClick",
    ToggleMuteButtonClickException = "ToggleMuteButtonClickException",
    ToggleCameraButtonClick = "ToggleCameraButtonClick",
    ToggleCameraButtonClickException = "ToggleCameraButtonClickException",
    EndCallButtonClick = "EndCallButtonClick",
    EndCallButtonClickException = "EndCallButtonClickException",
    CallingSDKInitSuccess = "CallingSDKInitSuccess",
    CallingSDKInitFailed = "CallingSDKInitFailed",
    CallingSDKLoadSuccess = "CallingSDKLoadSuccess",
    CallingSDKLoadFailed = "CallingSDKLoadFailed",
    GetConversationDetailsCallFailed = "GetConversationDetailsCallFailed",
    EndChatSDKCallFailed = "EndChatSDKCallFailed",
    GetChatReconnectContextSDKCallFailed = "GetChatReconnectContextSDKCallFailed",
    PostChatContextCallSucceed = "PostChatContextCallSucceed",
    PostChatContextCallFailed = "PostChatContextCallFailed",
    ParseAdaptiveCardFailed = "ParseAdaptiveCardFailed",
    ClientDataStoreProviderFailed = "ClientDataStoreProviderFailed",
    InMemoryDataStoreFailed = "InMemoryDataStoreFailed",

    WebChatLoaded = "WebChatLoaded",
    LCWChatButtonClicked = "LCWChatButtonClicked",
    LCWChatButtonShow = "LCWChatButtonShow",
    WidgetLoadStarted = "WidgetLoadStarted",
    WidgetLoadComplete = "WidgetLoadComplete",
    WidgetLoadFailed = "WidgetLoadFailed",
    StartChatMethodException = "StartChatMethodException",
    CloseChatMethodException = "CloseChatMethodException",
    PrechatSurveyLoaded = "PrechatSurveyLoaded",
    PrechatSubmitted = "PrechatSubmitted",
    StartChatSDKCall = "StartChatCall",
    StartChatEventRecevied = "StartChatEventReceived",
    EndChatSDKCall = "EndChatSDKCall",
    EndChatEventReceived = "EndChatEventReceived",
    WindowClosed = "WindowClosed",
    OnNewMessageFailed = "OnNewMessageFailed",
    OnNewMessageAudioNotificationFailed = "OnNewMessageAudioNotificationFailed",
    DownloadTranscriptResponseNullOrUndefined = "DownloadTranscriptResponseNullOrUndefined",
    EmailTranscriptSent = "EmailTranscriptSent",
    EmailTranscriptFailed = "EmailTranscriptFailed",
    DownloadTranscriptFailed = "DownloadTranscriptFailed",
    StartChatFailed = "StartChatFailed",
    IC3ThreadUpdateEventReceived = "IC3ThreadUpdateEventReceived",
    ConfirmationCancelButtonClicked = "ConfirmationCancelButtonClicked",
    ConfirmationConfirmButtonClicked = "ConfirmationConfirmButtonClicked",
    LoadingPaneLoaded = "LoadingPaneLoaded",
    EmailTranscriptLoaded = "EmailTranscriptLoaded",
    OutOfOfficePaneLoaded = "OutOfOfficePaneLoaded",
    PostChatSurveyLoadingPaneLoaded = "PostChatSurveyLoadingPaneLoaded",
    PostChatSurveyLoaded = "PostChatSurveyLoaded",
    ConfirmationPaneLoaded = "ConfirmationPaneLoaded",
    ProactiveChatPaneLoaded = "ProactiveChatPaneLoaded",
    ReconnectChatPaneLoaded = "ReconnectChatPaneLoaded",
    HeaderCloseButtonClicked = "HeaderCloseButtonClicked",
    HeaderMinimizeButtonClicked = "HeaderMinimizeButtonClicked",
    DownloadTranscriptButtonClicked = "DownloadTranscriptButtonClicked",
    EmailTranscriptButtonClicked = "EmailTranscriptButtonClicked",
    EmailTranscriptCancelButtonClicked = "EmailTranscriptCancelButtonClicked",
    AudioToggleButtonClicked = "AudioToggleButtonClicked",
    SuppressBotMagicCodeSucceeded = "SuppressBotMagicCodeSucceeded",
    SuppressBotMagicCodeFailed = "SuppressBotMagicCodeFailed",
    GetConversationDetailsException = "GetConversationDetailsException",
    BrowserUnloadEventStarted = "BrowserUnloadEventStarted",
    GetAuthTokenCalled = "GetAuthTokenCalled",
    GetAuthTokenFailed = "GetAuthTokenFailed",
    ReceivedNullOrEmptyToken = "ReceivedNullOrEmptyToken",
    CustomerVoiceResponsePageLoaded = "CustomerVoiceResponsePageLoaded",
    CustomerVoiceFormResponseSubmitted = "CustomerVoiceFormResponseSubmitted",
    CustomerVoiceFormResponseError = "CustomerVoiceFormResponseError",

    //WebChat Middleware Events
    ProcessingHTMLTextMiddlewareFailed = "ProcessingHTMLTextMiddlewareFailed",
    ProcessingSanitizationMiddlewareFailed = "ProcessingSanitizationMiddlewareFailed",
    FormatTagsMiddlewareJSONStringifyFailed = "FormatTagsMiddlewareJSONStringifyFailed",
    QueuePositionMessageRecieved = "QueuePositionMessageRecieved",
    AverageWaitTimeMessageRecieved = "AverageWaitTimeMessageRecieved",
    DataMaskingRuleApplied = "DataMaskingRuleApplied",
    DataMaskingRuleApplyFailed = "DataMaskingRuleApplyFailed",
    IC3ClientEvent = "IC3ClientEvent",
    ConversationEndedThreadEventReceived = "ConversationEndedThreadEventReceived",
    InvalidConfiguration = "InvalidConfiguration",
    SendTypingIndicatorSucceeded = "SendTypingIndicatorSucceeded",
    SendTypingIndicatorFailed = "SendTypingIndicatorFailed",
    WebChatEvent = "WebChatEvent",

    PreChatSurveyStartChatMethodFailed = "PreChatSurveyStartChatMethodFailed",
    ChatAlreadyTriggered = "ChatAlreadyTriggered",
    StartProactiveChatEventReceived = "StartProactiveChatEventReceived",
    StartProactiveChatMethodFailed = "StartProactiveChatMethodFailed",
    ProactiveChatAccepted = "ProactiveChatAccepted",
    ProactiveChatRejected = "ProactiveChatRejected",
    IncomingProactiveChatScreenLoaded = "IncomingProactiveChatScreenLoaded",
    ProactiveChatClosed = "ProactiveChatClosed",
    ReconnectChatContinueConversation = "ReconnectChatContinueConversation",
    ReconnectChatStartNewConversation = "ReconnectChatStartNewConversation",
    ReconnectChatMinimize = "ReconnectChatMinimize",

    MessageSent = "MessageSent",
    MessageReceived = "MessageReceived",
    SystemMessageReceived = "SystemMessageReceived",

    CustomContextReceived = "CustomContextReceived",

    // Internet connection
    NetworkDisconnected = "NetworkDisconnected",
    NetworkReconnected = "NetworkReconnected"
}

export interface TelemetryInput {
    scenarioType: ScenarioType;
    payload: TelemetryData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    telemetryInfo?: any;
}

export class TelemetryConstants {
    private static map(eventTypeOrScenarioType: TelemetryEvent): ScenarioType {
        switch (eventTypeOrScenarioType) {
            case TelemetryEvent.ParseAdaptiveCardFailed:
            case TelemetryEvent.ReceivedNullOrEmptyToken:
            case TelemetryEvent.GetAuthTokenCalled:
            case TelemetryEvent.SuppressBotMagicCodeSucceeded:
            case TelemetryEvent.SuppressBotMagicCodeFailed:
                return ScenarioType.CONFIG_VALIDATION;

            case TelemetryEvent.WebChatLoaded:
            case TelemetryEvent.WidgetLoadComplete:
            case TelemetryEvent.WidgetLoadFailed:
            case TelemetryEvent.IncomingProactiveChatScreenLoaded:
            case TelemetryEvent.LCWChatButtonShow:
            case TelemetryEvent.PrechatSurveyLoaded:
            case TelemetryEvent.LoadingPaneLoaded:
            case TelemetryEvent.PostChatSurveyLoadingPaneLoaded:
            case TelemetryEvent.PostChatSurveyLoaded:
            case TelemetryEvent.EmailTranscriptLoaded:
            case TelemetryEvent.OutOfOfficePaneLoaded:
            case TelemetryEvent.ConfirmationPaneLoaded:
            case TelemetryEvent.ProactiveChatPaneLoaded:
                return ScenarioType.LOAD;

            case TelemetryEvent.PrechatSubmitted:
            case TelemetryEvent.LCWChatButtonClicked:
            case TelemetryEvent.ProactiveChatAccepted:
            case TelemetryEvent.ProactiveChatRejected:
            case TelemetryEvent.ProactiveChatClosed:
            case TelemetryEvent.ProcessingHTMLTextMiddlewareFailed:
            case TelemetryEvent.DataMaskingRuleApplied:
            case TelemetryEvent.ConversationEndedThreadEventReceived:
            case TelemetryEvent.InvalidConfiguration:
            case TelemetryEvent.DownloadTranscriptResponseNullOrUndefined:
            case TelemetryEvent.EmailTranscriptSent:
            case TelemetryEvent.EmailTranscriptFailed:
            case TelemetryEvent.DownloadTranscriptFailed:
            case TelemetryEvent.IC3ThreadUpdateEventReceived:
            case TelemetryEvent.ConfirmationCancelButtonClicked:
            case TelemetryEvent.ConfirmationConfirmButtonClicked:
            case TelemetryEvent.PreChatSurveyStartChatMethodFailed:
            case TelemetryEvent.HeaderCloseButtonClicked:
            case TelemetryEvent.HeaderMinimizeButtonClicked:
            case TelemetryEvent.MessageSent:
            case TelemetryEvent.MessageReceived:
            case TelemetryEvent.CustomContextReceived:
            case TelemetryEvent.BrowserUnloadEventStarted:
            case TelemetryEvent.NetworkDisconnected:
            case TelemetryEvent.NetworkReconnected:
            case TelemetryEvent.AudioToggleButtonClicked:
            case TelemetryEvent.EmailTranscriptCancelButtonClicked:
            case TelemetryEvent.CustomerVoiceResponsePageLoaded:
            case TelemetryEvent.CustomerVoiceFormResponseSubmitted:
            case TelemetryEvent.CustomerVoiceFormResponseError:
                return ScenarioType.ACTIONS;

            case TelemetryEvent.StartChatSDKCall:
            case TelemetryEvent.StartChatEventRecevied:
            case TelemetryEvent.StartChatMethodException:
            case TelemetryEvent.CloseChatMethodException:
            case TelemetryEvent.StartProactiveChatEventReceived:
            case TelemetryEvent.StartProactiveChatMethodFailed:
            case TelemetryEvent.OnNewMessageFailed:
            case TelemetryEvent.OnNewMessageAudioNotificationFailed:
            case TelemetryEvent.GetConversationDetailsCallFailed:
            case TelemetryEvent.EndChatSDKCall:
            case TelemetryEvent.EndChatEventReceived:
            case TelemetryEvent.EndChatSDKCallFailed:
            case TelemetryEvent.PostChatContextCallFailed:
            case TelemetryEvent.PostChatContextCallSucceed:
            case TelemetryEvent.GetConversationDetailsException:
                return ScenarioType.SDK;

            case TelemetryEvent.VideoCallAcceptButtonClick:
            case TelemetryEvent.CallAdded:
            case TelemetryEvent.LocalVideoStreamAdded:
            case TelemetryEvent.LocalVideoStreamRemoved:
            case TelemetryEvent.RemoteVideoStreamAdded:
            case TelemetryEvent.RemoteVideoStreamRemoved:
            case TelemetryEvent.CallDisconnected:
            case TelemetryEvent.CallDisconnectedException:
            case TelemetryEvent.IncomingCallEnded:
            case TelemetryEvent.VoiceVideoSdkInitialize:
            case TelemetryEvent.VoiceVideoSdkInitializeException:
            case TelemetryEvent.VoiceVideoLoading:
            case TelemetryEvent.VoiceVideoNotLoaded:
            case TelemetryEvent.VoiceVideoLoadingException:
            case TelemetryEvent.VoiceVideoAcceptCallException:
            case TelemetryEvent.VoiceVideoAcceptCallWithVideoException:
            case TelemetryEvent.VoiceCallAcceptButtonClick:
            case TelemetryEvent.CallRejectClick:
            case TelemetryEvent.CallRejectClickException:
            case TelemetryEvent.ToggleMuteButtonClick:
            case TelemetryEvent.ToggleMuteButtonClickException:
            case TelemetryEvent.ToggleCameraButtonClick:
            case TelemetryEvent.ToggleCameraButtonClickException:
            case TelemetryEvent.EndCallButtonClick:
            case TelemetryEvent.EndCallButtonClickException:
            case TelemetryEvent.CallingSDKInitSuccess:
            case TelemetryEvent.CallingSDKInitFailed:
            case TelemetryEvent.CallingSDKLoadSuccess:
            case TelemetryEvent.CallingSDKLoadFailed:
                return ScenarioType.CALLING;

            default:
                return ScenarioType.ACTIONS;
        }
    }

    public static mapEventToScenario(eventTypeOrScenarioType: TelemetryEvent): ScenarioType {
        return TelemetryConstants.map(eventTypeOrScenarioType);
    }
}
