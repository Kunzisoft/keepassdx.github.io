## Why KeePassDX?
It is an Android app implementation of the KeePass password manager.

KeePassDX was created to meet the security and usability needs of having a KeePass app on Android:
 * Easy secure password management and form filling tools.
 * Only libre software tools to guarantee the security of the app.
 * Libre software store and no closed API
 * Native langage (Kotlin, Java, C) for a small app size, security and a better integration.
 * Android design, architecture and ergonomics.

## What makes KeePassDX stand out from other password managers?
 * Your sensitive data is not stored on a private server or in a closed cloud. You have control of your passwords.
 * KeePass file standards are used to maintain compatibility and portability with different devices (computers and portable devices with different operating systems).
 * The code is open source, meaning you can check how the encryption algorithms are implemented.
 * The developers are attentive to your needs, and can even integrate the features you define.
 * No advertising. Not even in the free version.

## Can I open my database without my master key (master password and/or keyfile)?
**No, you can not open a database file without the master password (and/or) the associated keyfile.**

Be sure to remember your master password and save the keyfile in a safe place. To prevent this from happening, you could use some of the methods for remembering passphrases described in the [Create and maintain secure passwords guide (securityinabox.org)](https://securityinabox.org/en/guide/passwords/#remembering-secure-passwords).

## Can I open my database easily other than with a password?
**Yes**, there is an alternative [fingerprint/device credential opening option](https://github.com/Kunzisoft/KeePassDX/wiki/Advanced-Unlocking) for Android devices that support this feature, so no one can access the app without scanning your fingerprint or enter your master key.

**You must always know your master password, the advanced unlocking is only a faster unlocking tool.**

## How am I sure my passwords are safely stored in the app?
Users are allowed to save and use passwords, keys and digital identities in a secure way by **integrating the lastest encryption algorithms** and **Android architecture standards**. All the source-code can be used, studied, changed, and distributed freely.

You can increase the security of your database by changing the encryption algorithm and increase the rounds of encryption keys. (In `Settings → Database Settings` when your database is open)

_Warning: Increase the number of rounds sparingly to maintain a reasonable opening time._

## If I uninstall or remove KeePassDX, what will happen to my passwords?
The application will be deleted from your phone, but your database (stored in a .kdbx file) will remain.

You can open this file at any time in the future if you install KeePassDX again. For the same reason, if you wish to remove all traces of using KeePassDX, you need to delete both the application and the database file.

## I accidentally deleted the database file!
Hopefully you made a [backup](https://github.com/Kunzisoft/KeePassDX/wiki/Backup#keepass-database-backup) beforehand. Make sure you haven't simply forgotten where you stored the file in the first place. Search your phone for a file with a .kdbx extension.

## Can I recover my passwords on another device if I lose my main device?
**Yes**, but you **must save the .kdb or .kdbx file from your database to external storage first** (like a hard-drive or to a secure cloud). It is recommended to backup your data after each modification in case you lose your Android device. That way you can retrieve the data and import it into a new installation of KeePass DX on your new Android device.

## Can I open KeePassDX database on another phone or on the computer?
**Yes**, you will need to copy the password database file to another phone or to a computer, install a [KeePass compatible program](https://keepass.info/download.html) on your computer or new device and then you will be ready to open the database.

Make sure that you copy the file over secure means, like your own trusted USB disk or connecting the phone directly to the computer. Assess if the other phone or computer is a secure environment to open your password database on.

## Can I use KeePassDX to share accounts?
**Yes**, but it's important to note a few details to ensure security.

Make sure you share the username and password through a secure channel. The best option would be to exchange account details in person or in encrpyted communication. Once this is done, you can keep these account details in their own KeePassDX databases.

It is also possible to create a password database file (.kdbx) with shared accounts, and exchange it over secure channels (e.g. USB memory stick) as well as the master password. Once you work with a shared database file, you should assign a person in charge of managing the database file, including backups, and update if any changes happened to any shared accounts.

In certain circumstances, you may consider an online password manager. It is important that you understand the risks involved and take appropriate measures, such as excluding highly-sensitive accounts from the online database. There are open source alternatives.

## Why not an online version?
The offline and online client concepts only exists in other apps because the file access network tools are directly integrated into the code of the main app. It’s a different choice that doesn’t meet app design and safety standards considering **it is not normally the purpose of an Android password editor app to take care of external file synchronization on clouds** (which can be under closed licensed and recover your database), it is rather the purpose of the [file manager app](https://developer.android.com/guide/topics/providers/document-provider).

Of course, you use the file manager you want, whether it is connected to internet or not.

_Note that it is planned to create a separate file manager app to handle file sharing requests over the network._

## Can I store my data in cloud storage?
**Yes**, You can of course add the cloud app of your choice to your file manager. We recommend using a cloud with a personal server and AGPLv3+ license. You can find a non-exhaustive [list of compatible file managers](https://github.com/Kunzisoft/KeePassDX/wiki/File-Manager-and-Sync#compatibility) on the wiki.

## How do I open my database file from a cloud?
KeepassDX uses the file managers on your device. **If your default manager is not connected to your cloud, you need to open your cloud app and select your database file.** The linked file provided by the content provider may have a strange name, the alias feature can be used for better visibility.

## Why do I see an error asking me to re-open the database file from my file browser?
KeePassDX uses one of your device's file manager and stores the generated links in the "recent databases" list.
If the selected file manager breaks the link, it is necessary to re-open the file from your manager because it does not have the functionality to keep the persistent links. (More info on this in [File Manager and Sync](https://github.com/Kunzisoft/KeePassDX/wiki/File-Manager-and-Sync))

## Does this app display attachments?
**Yes**, you can upload and download your attached files, there is even an internal image file viewer. But your attached files should not be very large. For large files, use alternative open source data encryption solutions (virtual encrypted disks). 

## Why is the database file smaller after a save?
The code for the database is constantly optimized (by ordering the nodes, managing the compression, and using the adapted version of the base). The filesize will be smaller, but all data will be present.

## How can I secure KeePassDX and database access?
There are various strategies which you could implement : 
* It is possible to give a password database misleading name which would suggest it is something else like "notes.odt" or "image.png". You can instruct KeePassDX not to remember which database it opened last time. Open `Settings -> App -> App setting -> History` and deselect options `Remember database locations` and `Show recent files`. You will need to remember yourself which file is saved where to access your password database. And you will need to open it directly from KeePassDX.
* You can hide the applications name and icon or simply add a credential to prevent its access using a **custom android launcher**.

## Why are updates not available at the same time on all stores?
 - the **Play Store** only needs an APK to be generated and manually signed to be added, it usually takes a few hours to be available because it is deployed with [Fastlane](http://fastlane.tools/). The management of the APK and its data by the Google servers is obscure.
 - On **F-Droid**, to ensure the code is libre, it checks the [sources of the Git repository](https://gitlab.com/fdroid/fdroiddata/-/blob/master/metadata/com.kunzisoft.keepass.libre.yml) directly (by checking the presence of new tags). Then an APK is built that the server signs during the compilation of the code and dependencies. Updating the project takes 1-5 days for F-Droid to analyze all available repositories, build sources and deploy the generated APK. So F-Droid is slower for deployment, but is run by volunteers and guaranteed to be a clean APK. :)

## Why a Libre, Free and Pro version?
All versions currently have the same usage features.

 * [The Libre version](https://www.f-droid.org/en/packages/com.kunzisoft.keepass.libre/) is the version provided by F-Droid, it is guaranteed to have no proprietary code, and is not linked to any closed services. The app is automatically signed and compiled from the GitHub repository. It is possible to unlock the themes with a procedure.
 * [The Free version](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free), for everyday use, is the basic version at the Google Play Store. It is compiled and signed by the developers, and sent to the Play Store to be cataloged by Google. It has the same features as other versions with alternative themes blocked.
 * [The Pro version](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro), is for people who want everything, is the unlocked version of the Google Play Store. It has unlocked themes, the possibility to configure the Steam TOTP and will have content to facilitate the integration of entries for commonly used services. (It is currently available only to assist development.)

For the moment, there is no difference between the Libre, Free and Pro version of the code (except for access to the alternative themes and for Steam TOTP generation). Later, the pro version will offer content to easily fill in entries for the most used commercial services, (mainly sign-in icons and templates for proprietary companies) but no services in the background of the app.
The Libre version will remain a version without any proprietary content and will not offer basic tools facilitating the recording of commonly used inputs.

It is possible to transfer the properties of a KeePassDX application to another version. (More info [here](https://github.com/Kunzisoft/KeePassDX/wiki/Import-and-Export#app-properties))

## Why not give direct access to alternative themes?
Instead of directly providing these optional visual styles, they are an incentive to contribute and replace advertising without depriving users of functionality in the free version.

The procedure to unlock these themes in KeePass Libre is sent by e-mail manually so feel free to ask at [contact@kunzisoft.com](mailto:contact@kunzisoft.com) if you have made a contribution.

## Can I suggest features and report bugs for the app?
**Yes**, do so on GitHub: [https://github.com/Kunzisoft/KeePassDX/issues](https://github.com/Kunzisoft/KeePassDX/issues)
