"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsSentimentSection = exports.DocsSentiment = exports.DocsHomepageElementName = exports.DocsProtocolVersion = exports.DocsSectionName = void 0;
/**
 * Docs page sections within pages, some shared across pages or for a specific page
 */
var DocsSectionName;
(function (DocsSectionName) {
    DocsSectionName["BOTTOM_MENU_LINKS"] = "Bottom Menu Links";
    DocsSectionName["DAPP_LINKS"] = "DApp Links";
    DocsSectionName["DEVELOPER_LINKS"] = "Developer Links";
    DocsSectionName["GETTING_STARTED_LINKS"] = "Getting Started Links";
    DocsSectionName["QUICK_LINKS"] = "Quick Links";
    DocsSectionName["SENTIMENT"] = "Sentiment";
    DocsSectionName["SMART_CONTRACT_LINKS"] = "Smart Contract Links";
    DocsSectionName["WELCOME_LINKS"] = "Welcome Links";
})(DocsSectionName = exports.DocsSectionName || (exports.DocsSectionName = {}));
/**
 * Protocol version, logged as a section in Navbar clicks
 */
var DocsProtocolVersion;
(function (DocsProtocolVersion) {
    DocsProtocolVersion["V1"] = "V1";
    DocsProtocolVersion["V2"] = "V2";
    DocsProtocolVersion["V3"] = "V3";
})(DocsProtocolVersion = exports.DocsProtocolVersion || (exports.DocsProtocolVersion = {}));
/**
 * Homepage elements that can be clicked on
 */
var DocsHomepageElementName;
(function (DocsHomepageElementName) {
    DocsHomepageElementName["BUILD_ORACLE"] = "Build Oracle";
    DocsHomepageElementName["DISCORD"] = "Discord";
    DocsHomepageElementName["EMBED_SWAP_WIDGET"] = "Embed Swap Widget";
    DocsHomepageElementName["FORUM"] = "Forum";
    DocsHomepageElementName["GITHUB"] = "Github";
    DocsHomepageElementName["GRANTS"] = "Grants";
    DocsHomepageElementName["IMPLEMENT_SWAP"] = "Implement Swap";
    DocsHomepageElementName["PROVIDE_LIQUIDITY"] = "Provide Liquidity";
    DocsHomepageElementName["SDK"] = "SDK";
    DocsHomepageElementName["SDK_QUICK_START"] = "Sdk Quick Start";
    DocsHomepageElementName["SMART_CONTRACTS"] = "Smart Contracts";
    DocsHomepageElementName["SMART_CONTRACT_OVERVIEW"] = "Smart Contract Overview";
    DocsHomepageElementName["V3_CONTRACT_ADDRESS"] = "V3 Contract Address";
    DocsHomepageElementName["V3_CORE"] = "V3 Core";
    DocsHomepageElementName["V3_PERIPHERY"] = "V3 Periphery";
    DocsHomepageElementName["V3_SDK"] = "V3 SDK";
    DocsHomepageElementName["V3_WIDGETS"] = "V3 Widgets";
    DocsHomepageElementName["WHAT_IS_MAGESWAP"] = "What is Mageswap";
    DocsHomepageElementName["WHITEPAPER"] = "Whitepaper";
    DocsHomepageElementName["WIDGETS"] = "Widgets";
})(DocsHomepageElementName = exports.DocsHomepageElementName || (exports.DocsHomepageElementName = {}));
/**
 * Sentiment result, logged as an element
 */
var DocsSentiment;
(function (DocsSentiment) {
    DocsSentiment["NEGATIVE_SENTIMENT"] = "Negative Sentiment";
    DocsSentiment["NEUTRAL_SENTIMENT"] = "Neutral Sentiment";
    DocsSentiment["POSITIVE_SENTIMENT"] = "Positive Sentiment";
})(DocsSentiment = exports.DocsSentiment || (exports.DocsSentiment = {}));
/**
 * Differentiating which section of a page sentiment is logged from
 */
var DocsSentimentSection;
(function (DocsSentimentSection) {
    DocsSentimentSection["BOTTOM_SECTION"] = "SENTIMENT_BOTTOM_SECTION";
    DocsSentimentSection["TOP_SECTION"] = "SENTIMENT_TOP_SECTION";
})(DocsSentimentSection = exports.DocsSentimentSection || (exports.DocsSentimentSection = {}));
