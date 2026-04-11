export interface PrivacyPolicy {
    appName: string;
    text: string;
}

export const privacyPolicies: PrivacyPolicy[] = [
    {
        appName: "IALFM Attendance App",
        text:
            "This site does not collect personal data for marketing, tracking, or analytics. Any information entered into the app is used only to demonstrate attendance management features and is not shared with third parties.",
    },
    {
        appName: "I-Dazzle E-Commerce Platform",
        text:
            "This site does not collect personal data for marketing, tracking, or analytics. Any information entered into the app is used only to demonstrate e-commerce features and is not shared with third parties.",
    },
    {
        appName: "Neuro-Med",
        text:
            "This app does not collect personal data for marketing, tracking, or analytics. Any information entered into the app is used only to demonstrate healthcare features and is not shared with third parties.",
    }
];