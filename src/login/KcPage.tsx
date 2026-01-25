import {lazy, Suspense} from "react";
import type {ClassKey} from "keycloakify/login";
import type {KcContext} from "./KcContext";
import {useI18n} from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import "./main.css";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const {kcContext} = props;

    const {i18n} = useI18n({kcContext});

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={false}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {
    // Page layout (your Template.tsx uses many of these)
    kcHtmlClass: "h-full",
    kcBodyClass: "min-h-screen bg-zinc-950 text-zinc-100 antialiased",
    kcLoginClass: "min-h-screen flex flex-col items-center justify-center px-4 py-10",
    kcHeaderClass: "w-full max-w-md mb-6",
    kcHeaderWrapperClass: "flex items-center justify-center gap-3",
    kcFormCardClass:
        "w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur px-6 py-8 shadow-xl",
    kcFormHeaderClass: "mb-6",
    kcContentWrapperClass: "space-y-4",

    // Alerts / messages
    kcAlertClass: "mb-4 rounded-xl border px-4 py-3 text-sm",
    kcAlertTitleClass: "leading-5",
    kcFeedbackErrorIcon: "hidden",
    kcFeedbackWarningIcon: "hidden",
    kcFeedbackSuccessIcon: "hidden",
    kcFeedbackInfoIcon: "hidden",

    // Forms
    kcFormGroupClass: "mb-4",
    kcLabelClass: "mb-1 block text-sm font-medium text-zinc-200",
    kcInputClass:
        "w-full rounded-xl border border-zinc-700 bg-zinc-950/40 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/30",
    kcInputErrorMessageClass: "mt-1 text-sm text-red-300",

    // Buttons
    kcButtonClass:
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
    kcButtonPrimaryClass:
        "bg-white text-zinc-950 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/40",
    kcButtonDefaultClass:
        "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-white/20",
    kcButtonBlockClass: "w-full",

    // Links / helpers
    kcFormOptionsWrapperClass: "flex items-center justify-between gap-3 text-xs text-zinc-400",
    kcFormOptionsClass: "text-xs text-zinc-400",
    kcFormButtonsClass: "mt-6",
    kcInfoAreaWrapperClass: "mt-6 text-center text-sm text-zinc-300",
    kcSignUpClass: "mt-6",

    // Locale dropdown (if you enable languages)
    kcLocaleMainClass: "mb-0",
    kcLocaleWrapperClass: "flex justify-end",
    kcLocaleDropDownClass: "relative",
    kcLocaleListClass:
        "absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg",
    kcLocaleListItemClass: "border-b border-zinc-900 last:border-b-0",
    kcLocaleItemClass: "block px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
} satisfies { [key in ClassKey]?: string };