# Sidewinder privacy policy

_Effective 09/17/2026 · Version 1.0_

This policy describes what the Sidewinder app does with information, who receives it, and the choices you have. It is written to be read in full in under five minutes. Sidewinder is published by G&R Outdoors ("we", "us"), 200 El Capitan Loop, Dripping Springs, TX 78620. Questions go to grshavor@icloud.com. The current version of this policy is also published at https://benjamindavidmoore.github.io/sidewinder-legal/.

## The short version

- Sidewinder has no account, no sign-in, no analytics, no advertising and no server of its own.
- To score a buck, the app sends your photo and the distance directly from your phone to the AI provider you choose: Anthropic, OpenAI or Google. That provider processes it under its own privacy policy.
- You supply your own API key for that provider. The key is stored in your phone's secure keychain and sent only to that provider.
- Everything else, including your scoring history and photos, stays on your phone and is deleted when you delete it or uninstall the app.

## Information the app handles

- Photos you choose to score. Taken with the camera inside the app or picked from your photo library. They are sent to the AI provider you selected, downscaled to that engine's working size, and stored in your on-device history alongside the result.
- Distance. The number you type, or one read from a rangefinder visible in the photo. Reading the rangefinder happens entirely on the device using Apple Vision on iPhone and Google ML Kit on Android; no text leaves the phone for that step.
- API keys. One per engine, entered by you in Settings. Kept in iOS Keychain or Android Keystore. Sent only to the provider the key belongs to, in the request that scores a photo. Never sent to us or to anyone else.
- Display name. Optional. Shown on scores you share from the app. Stored only on the device.
- Preferences. Distance units, album preference, selected engine and model, and similar settings. Stored only on the device.
- Scoring history. Each result, the photos it was scored from, the measurements and the raw exchange with the provider. Stored only on the device. Delete any entry from the History tab.
## Who receives your photos

When you tap Score, the photo, the distance and the measurement instructions go directly from your phone to one of these providers, depending on the engine selected in Settings. Only that provider receives anything.

- Anthropic (Claude), api.anthropic.com. Privacy policy: https://www.anthropic.com/privacy
- OpenAI (ChatGPT), api.openai.com. Privacy policy: https://openai.com/policies/privacy-policy
- Google (Gemini), generativelanguage.googleapis.com. Privacy policy: https://policies.google.com/privacy

Each provider processes what you send under its own terms and may retain it for a period for abuse monitoring and safety. Because you use your own API key, you are that provider's customer for these requests, and their terms govern retention and use. We never see the request or the response.

## What we do not do

- We do not collect, store or have access to your photos, distances, results, keys or name. There is no Sidewinder server.
- We do not use analytics, crash reporting, advertising identifiers or any form of tracking.
- We do not sell or share personal information.
- We do not knowingly collect information from children under 13, and the app is not directed to them.

## Device permissions

- Camera. To photograph a buck inside the app. Requested the first time you open the Score tab, after you have read the disclosure.
- Photo library, read. To pick an existing photo to score. iOS and Android both use the system picker, so the app only ever sees the photo you choose.
- Photo library, add. To save a photo you took in the app to your album, only when you choose to.

## Retention and deletion

- Photos and results in History remain until you delete them or uninstall the app.
- API keys remain until you clear them in Settings or uninstall the app.
- Uninstalling the app removes everything it stored.
- Data already sent to an AI provider is retained or deleted under that provider's policy. Contact the provider to exercise rights over it.

## Security

Requests to AI providers use HTTPS. API keys are held in the platform's secure storage rather than in ordinary preferences. No method of transmission or storage is perfectly secure, and you should keep your provider keys private and rotate them if you believe they have been exposed.

## Your rights

Because we hold no personal information about you, there is nothing for us to access, correct, export or delete on your behalf. Rights over data sent to an AI provider are exercised with that provider. If you believe we do hold information about you, contact grshavor@icloud.com and we will respond within 30 days.

## The score

Sidewinder produces an estimated green score using the Boone and Crockett Club's typical whitetail formula. It is not an official measurement and cannot be considered an official score for any record book. Sidewinder is not affiliated with, sponsored by or endorsed by the Boone and Crockett Club. Boone and Crockett Club is a registered trademark of its owner. You remain responsible for complying with the hunting regulations that apply to you.

## Third-party software and licenses

Sidewinder is built with open-source software. The full license text of every component is available in the app under Settings, Open-source licenses.

- Flutter and Dart, BSD 3-Clause. Google LLC.
- camera, image_picker, path_provider, shared_preferences, package_info_plus, http, image, flutter_secure_storage, gal: Dart packages under BSD, MIT or Apache 2.0 licenses, listed in the app.
- Google ML Kit Text Recognition (Android only), used on-device to read rangefinder displays. Google APIs Terms of Service.
- Apple Vision framework (iOS only), used on-device to read rangefinder displays. Apple SDK license.
- Besley, Archivo and Courier Prime typefaces, SIL Open Font License 1.1.
Sidewinder uses no Anthropic, OpenAI or Google software in the app itself; it calls their public HTTP APIs with the key you provide.

## Changes to this policy

When this policy changes in substance, the in-app disclosure will be shown again on next launch and the version and effective date above will be updated. Continued use after that constitutes acceptance.

## Contact

G&R Outdoors
200 El Capitan Loop
Dripping Springs, TX 78620
grshavor@icloud.com