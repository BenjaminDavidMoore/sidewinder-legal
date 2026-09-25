# Sidewinder privacy policy

_Effective 09/25/2026 · Version 1.1_

This policy describes what the Sidewinder app does with information, who receives it, and the choices you have. Sidewinder is published by G&R Outdoors ("we", "us"), 200 El Capitan Loop, Dripping Springs, TX 78620. Questions go to grshavor@icloud.com. The current version of this policy is also published at https://benjamindavidmoore.github.io/sidewinder-legal/.

## The short version

- Sidewinder has no account, no sign-in, no analytics, no advertising and no server of its own.
- To score a buck, the app sends your photo and the distance you enter directly from your phone to the AI provider you choose: Anthropic, OpenAI or Google. The AI provider processes it under its own privacy policy.
- You supply your own API key for that provider. The API key is stored in your phone's secure keychain, and sent only to the AI provider of your choice.
- Everything else, including your scoring history and photos, stays on your phone, and is deleted when you delete it or uninstall the app.

## Information the app handles

- Photos. Photos that are taken with your camera inside the app or that you pick from your photo library. The photos are sent to the AI provider you select, downscaled to that engine's working size, and stored in your on-device history alongside the result.
- Distance. The distance you enter, or the distance read from a rangefinder visible in your photo. Reading the rangefinder happens entirely on the device, using the phone's built-in text recognition.
- API keys. You enter one API key, for the AI provider you use, in Settings. It is stored in the phone's secure keychain and sent only to that provider, in the request that scores a photo. It is never sent to Sidewinder or to anyone else.
- Display name. Optional. Shown on the scores you choose to share from the app. Stored only on the device.
- Preferences. Distance units, album preference, selected engine and model, and similar settings. Stored only on the device.
- Scoring history. Each photo, distance, score, and any other raw exchange you enter on the app or exchange with the AI engine is stored only on your phone/device. You may delete any entry from the History tab.

## Who receives your photos

When you tap Score, the photo, the distance, and the measurement instructions go directly from your phone to the AI provider selected in Settings. Only that provider receives anything:

- Anthropic (Claude), api.anthropic.com. Privacy policy: https://www.anthropic.com/privacy
- OpenAI (ChatGPT), api.openai.com. Privacy policy: https://openai.com/policies/privacy-policy
- Google (Gemini), generativelanguage.googleapis.com. Privacy policy: https://policies.google.com/privacy

Each provider processes what you send under its own terms and may retain it for a period for abuse monitoring and safety. You are that provider's customer for these requests, and the AI provider's terms govern retention and use. We never see the request or the response.

## What we do not do

- Sidewinder does not collect, store, or have access to your photos, distances, results, keys or name.
- Sidewinder does not use analytics, crash reporting, advertising identifiers, or any form of tracking.
- Sidewinder does not sell or share personal information.
- Sidewinder is not directed to children under 13 and does not knowingly collect information from them.

## Device permissions

- Camera. To photograph a buck inside the app, you must grant permission to access the camera. Permission is requested the first time you open the Score tab, after you have read the disclosure.
- Photo library, read. To pick an existing photo from your phone to score, the app uses the system photo picker. Sidewinder only sees the photo you choose.
- Photo library, add. You may choose to save a photo you took in the app to your album.

## Retention and deletion

- Photos and results in History remain until you delete them or uninstall the app.
- API keys remain until you clear them in Settings or uninstall the app.
- Uninstalling the app removes everything it stored.
- Data already sent to an AI provider is retained or deleted under that provider's policy. Contact the provider to exercise rights over it.

## Security

Requests to AI providers use HTTPS. API keys are held in the platform's secure storage rather than in ordinary preferences. No method of transmission or storage is perfectly secure, and you should keep your provider keys private and rotate them if you believe they have been exposed.

## Your rights

Sidewinder does not maintain any personal information about you. Rights over data sent to an AI provider are exercised with that provider.

## The score

Sidewinder produces an estimated green score using the Boone and Crockett Club's typical whitetail formula. It is not an official measurement and cannot be considered an official score for any record book. Sidewinder is not affiliated with, sponsored by or endorsed by the Boone and Crockett Club. Boone and Crockett Club is a registered trademark of its owner. You remain responsible for complying with the hunting regulations that apply to you.

## Third-party software and licenses

Sidewinder is built with open-source software. The full license text of every component is available in the app under Settings, Open-source licenses.

- Flutter and Dart, BSD 3-Clause. Google LLC.
- camera, image_picker, path_provider, shared_preferences, package_info_plus, http, image, flutter_secure_storage, gal: Dart packages under BSD, MIT or Apache 2.0 licenses, listed in the app.
- Google ML Kit Text Recognition, used on-device to read rangefinder displays. Google APIs Terms of Service.
- Apple Vision framework, used on-device to read rangefinder displays. Apple SDK license.
- Besley, Archivo and Courier Prime typefaces, SIL Open Font License 1.1.

Sidewinder uses no Anthropic, OpenAI or Google software in the app itself; it calls their public HTTP APIs with the key you provide.

## Changes to this policy

When this policy changes in substance, the in-app disclosure will be shown again on next launch and the version and effective date above will be updated. Continued use after that constitutes acceptance.

## Disputes

Governing Law: Use of the Sidewinder App, and all claims or disputes arising out of or relating to it, shall be governed by and construed in accordance with the laws of the State of Texas.

Negotiation and Mediation: If a dispute arises, the parties agree first to try to resolve it through direct good-faith discussions. If the dispute is not resolved within 30 days, the parties agree to submit the dispute to mediation under the rules of the Texas Alternative Dispute Resolution Act.

Binding Arbitration: If mediation fails to resolve the dispute within 60 days of selection of a mediator, any remaining controversy shall be settled by binding arbitration in Hays County, Texas, before a single arbitrator.

## Contact

G&R Outdoors
200 El Capitan Loop
Dripping Springs, TX 78620
grshavor@icloud.com
