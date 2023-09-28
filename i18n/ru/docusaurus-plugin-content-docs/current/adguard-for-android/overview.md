---
title: Обзор функций
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note Дисклеймер

AdGuard для Android не следует путать с Блокировщиком контента AdGuard. Блокировщик контента AdGuard — это приложение, представленное в Google Play. Он подчиняется политике Google, вследствие чего его функциональность ограничена. AdGuard для Android — это, напротив, мощное приложение, которое позволяет блокировать рекламу, управлять другими приложениями и выполнять другие функции, описанные в этой статье. AdGuard для Android можно скачать только [на сайте AdGuard](https://adguard.com/adguard-android/overview.html).

:::

## Защита

This screen combines all features of AdGuard’s protection:

- Блокировка рекламы
- Защита от трекинга
- Annoyance blocking
- DNS-защита
- Фаервол
- Антифишинг
- Интеграция с AdGuard VPN

More on each feature below.

### Блокировка рекламы

Эта функция блокирует рекламу, применяя фильтры для блокировки рекламы и языковые фильтры. О механизме блокировки рекламы можно узнать [из посвящённой ему статьи](/general/ad-filtering/how-ad-blocking-works).

Базовая защита эффективно блокирует рекламу на большинстве сайтов. Чтобы настроить блокировку рекламы, вы можете:

- Включить соответствующие языковые фильтры — они содержат правила фильтрации для блокировки рекламы на сайтах на определённых языках

- Добавить сайты в белый список — они не будут фильтроваться AdGuard

- Create user rules — AdGuard will apply them on specified websites. [Узнайте, как создавать свои фильтры](/general/ad-filtering/create-own-filters)

![Блокировка рекламы *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### Защита от трекинга

*Защита от трекинга* (ранее *Антитрекинг*) не позволяет веб-сайтам собирать информацию о вас, такую как ваш IP-адрес, информацию о вашем браузере, операционной системе, разрешении экрана и странице, с которой вы пришли или были перенаправлены. It can also block cookies that websites use to mark the browser and save your personal settings, user preferences, or recognize you upon your next visit.

![Защита от трекинга *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

Есть три предварительно настроенных уровня защиты. Они включают следующие функции:

 1. **Standard**

    a. *Блокировка трекеров*. Этот параметр защищает от онлайн-счётчиков и инструментов веб-аналитики с помощью Фильтра счётчиков и систем аналитики AdGuard

    b. *Запрос на прекращение отслеживания*. Эта настройка отправляет запросы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на сайты, которые вы посещаете

    c. *Удаление заголовка X-Client-Data*. Даннная настройка предотвращает отправку информации о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

 2. **High**

    a. *Блокировка трекеров*

    b. *Удаление параметров отслеживания из URL-адресов*. This setting strips tracking parameters like `utm_*` and `fb_ref` from page URLs using the AdGuard URL Tracking filter

    c. *Скрытие поисковых запросов*

    d. *Запрос на прекращение отслеживания*

    е. *Самоуничтожение сторонних куки-файлов*. Этот параметр ограничивает время жизни сторонних куки-файлов до 180 минут

    :::caution

    Эта настройка удаляет все сторонние куки-файлы, включая информацию о ваших логинах в социальных сетях или других сторонних сервисах. Возможно, вам придётся периодически повторно вводить логин и пароль на некоторых сайтах и сталкиваться с другими проблемами, связанными с куки. Чтобы блокировать только отслеживающие куки-файлы, используйте *Стандартный* уровень защиты.


:::

    f. *Удаление заголовка X-Client-Data*

 3. **Ultimate**

    a. *Блокировка трекеров*

    b. *Удаление параметров отслеживания из URL-адресов*

    c. *Скрытие поисковых запросов*

    d. *Запрос на прекращение отслеживания*

    е. *Самоуничтожение сторонних куки-файлов*

    f. *Блокировка WebRTC*. This setting blocks WebRTC, a technology that allows direct streaming of data between browsers and apps and can let others know your true IP address, even if you use a proxy or VPN

    g. *Блокировка Push API*. Этот параметр запрещает сайтам отправлять вам уведомления независимо от статуса активности вашего браузера

    h. *Блокировка Location API*. Эта настройка не позволяет браузерам обнаруживать ваши GPS-данные

    i. *Скрытие Referrer от сторонних ресурсов*. This setting hides the HTTP header that contains the URL of the initial page and changes it into the default or the specified one. You can set your custom referer in the respective field

    j. *Hide your User-Agent*. This setting removes identifying information from the User-Agent header that usually includes the name and version of the browser, the operating system, and language settings

    k. *Удаление заголовка X-Client-Data*

You can fine-tune Tracking protection by selecting the *Custom* protection level. [Learn more about other Tracking protection settings](/general/stealth-mode)

### Annoyance blocking

This feature is based on AdGuard's annoyance filters and allows you to block popups, online assistant windows, cookie notifications, prompts to download mobile apps, and similar annoyances. [Learn more about annoyance filters](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS-защита

*DNS protection* allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Some DNS servers have blocklists that help block DNS requests to potentially harmful domains

- In addition to DNS servers, AdGuard can filter DNS requests on its own using a special DNS filter. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- You can also block and unblock domains by creating user rules. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS-сервер

In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:

- Click *Add DNS server* and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and click *Add to AdGuard* next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

 By default, *Automatic DNS* is selected. It sets a DNS server based on your AdGuard and device settings. If you have integration with AdGuard VPN or another SOCKS5 proxy enabled, it connects to *AdGuard DNS Non-filtering* or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings.

#### DNS-фильтры

This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at [filterlists.com](https://filterlists.com/).

### Фаервол

This feature helps manage Internet access for specific apps installed on your device and for the device in general.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Global firewall rules

This section allows you to control Internet access for the entire device.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

These rules apply to all apps on your device unless you've set custom rules for them.

#### Custom firewall rules

In this section, you can control Internet access for specific apps — block the ones you don’t find trustworthy, or, on the contrary, unblock the ones you want to use despite global firewall rules.

1. Open *Custom firewall rules*. Under *Apps with custom rules*, tap *Add app*.

    ![Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Select the app for which you want to set individual rules.

    ![Adding an app to Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. В *Доступных пользовательских правилах* выберите те, которые вы хотите настроить, и нажмите «+». Теперь правила будут отображаться в разделе *Применяемые пользовательские правила*.

    ![Добавленное правило *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. Если вам нужно заблокировать определённый тип соединения, переведите переключатель влево. Если вы хотите разрешить его, оставьте переключатель включённым. Custom rules override global ones: any changes you make in *Global firewall rules* will not affect this app.

Чтобы удалить правило или приложение из *Пользовательских правил*, проведите по нему влево.

### Быстрые действия

*Быстрые действия* основаны на запросах из *Недавней активности* (которую можно найти в *Статистике*). В этом разделе показано, какие приложения недавно подключались к интернету.

![Быстрые действия *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

If you see an app that shouldn't be using the Internet at all or an app that you haven't used recently, you can block its access on the fly.

### Защита от фишинга

Browsing Security protects you from visiting phishing and malicious websites. Она также предупреждает о потенциально вредоносном ПО.

![Антифишинг *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

Если вы попытаетесь посетить опасный сайт, Защита от фишинга покажет вам такое предупреждение:

![Browsing Security warning *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Обратите внимание, что AdGuard 	— не антивирусная программа. Он не останавливает загрузку вирусов и не удаляет уже загруженные. Чтобы полностью защитить ваше устройство, мы рекомендуем использовать AdGuard в сочетании с антивирусом.

Защите от фишинга можно доверять: AdGuard не знает, какие сайты вы посещаете. Он использует хэш-префиксы вместо URL-адресов для проверки безопасности сайта.

### Интеграция с AdGuard VPN

AdGuard для Android создает локальный VPN для фильтрации трафика. Thus, other VPN apps cannot be used while AdGuard for Android is running. Но у приложений AdGuard и AdGuard VPN есть Режим интеграции, который позволяет использовать их вместе.

В этом режиме AdGuard VPN выступает в роли исходящего прокси-сервера, через который AdGuard направляет свой трафик. Это позволяет AdGuard создавать VPN-интерфейс и блокировать рекламу и трекеры локально, а AdGuard VPN направляет весь трафик через удалённый сервер.

Если вы отключите AdGuard VPN, AdGuard перестанет использовать его в качестве исходящего прокси. Если вы отключите AdGuard, AdGuard VPN будет маршрутизировать трафик через собственный VPN-интерфейс.

Если на устройство с Блокировщиком рекламы AdGuard вы установили AdGuard VPN, Блокировщик обнаружит VPN-приложение и автоматически включит *Интеграцию с AdGuard VPN*. Это работает и наоборот. Обратите внимание, что при включенной интеграции вы не сможете управлять исключениями приложений и подключаться к DNS-серверам из приложения AdGuard VPN. You can specify apps to be routed through your VPN tunnel via *Settings* → *Filtering* → *Network* → *Proxy* → *Apps operating through proxy*. To select a DNS server, open AdGuard → *DNS protection* → *DNS server*.

## Управление приложениями

В этом разделе вы можете управлять разрешениями и настройками фильтрации для всех приложений, установленных на вашем устройстве.

![Управление приложениями *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Нажав на приложение, вы можете управлять его настройками:

- Направлять трафик через AdGuard
- Блокировать рекламу и трекеры в этом приложении (*Фильтровать контент*)
- Фильтровать его HTTPS-трафик (для небраузерных приложений требуется [установка сертификата CA AdGuard в системное хранилище](/adguard-for-android/solving-problems/https-certificate-for-rooted/), доступное на рутованных устройствах)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![Управление приложениями: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Из контекстного меню вы также можете попасть в статистику приложения.

![Управление приложениями: Chrome. Контекстное меню *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Problem-free and problematic apps

By default, only problem-free apps are routed through AdGuard and filtered. These are the apps that still work properly when filtering is enabled.

Problematic apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services) may work incorrectly when routed through AdGuard. That's why you may see the following warning when trying to route or filter all apps:

![Маршрутизировать все приложения *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in *Settings* → *General* → *Advanced* → *Low-level settings* → *Protection* → *Excluded apps*.

## Статистика

This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more.

![Statistics *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

The stats are categorized into different sections.

### Запросы

This section shows the number of blocked ads, trackers, and the total number of requests for the selected time period: 24 hours, 7 days, 30 days, or all time. You can also filter requests by data type: mobile data, Wi-Fi, or all data combined.

*Recent activity*, formerly known as *Filtering log*, shows the last 10,000 requests processed by AdGuard. Tap *Customize* to filter requests by status (*regular*, *blocked*, *modified*, or *allowlisted*) or origin (*first-party* or *third-party*).

You can tap a request to view its details and add a blocking or unblocking rule.

### Data usage

This section shows the amount of downloaded, uploaded, and saved traffic for the selected time period and data type. Tap *saved*, *uploaded*, or *downloaded* to view the graph of data usage over time.

### Приложения

This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests.

Tap *View all apps* to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Компании

This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS-статистика

This section shows data about the requests handled by *DNS protection*. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved, downloaded, and uploaded.

### Battery usage

This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from your device settings. This happens because the system attributes the traffic of filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/)

## Настройки

### Основное

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable *Auto-report crashes* and *Send technical and interaction data*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under *App and filter updates*, you can configure automatic filter updates and select an app update channel. Choose *Release* for more stability and *Beta* or *Nightly* for early access to new features.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Расширенные настройки

*Автоматизация* позволяет управлять AdGuard через приложения-таскеры.

*Watchdog* helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). The value you enter will be the interval in seconds between watchdog checks.

*Уровень логирования* определяет, какие данные о работе приложения должны записываться. По умолчанию приложение собирает данные о своих событиях. The *Debug* level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Подробнее о сборе и отправке логов](/adguard-for-android/solving-problems/logcat/)

![Расширенные *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Раздел *Низкоуровневых настроек* предназначен для продвинутых пользователей. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Низкоуровневые настройки *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Фильтрация

В этом разделе можно управлять настройками HTTPS-фильтрации, фильтрами и пользовательскими скриптами, а также настраивать прокси-сервер.

![Фильтрация *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Сеть

##### HTTPS-фильтрация

Чтобы заблокировать рекламу и трекеры на большинстве веб-сайтов и в большинстве приложений, AdGuard необходимо фильтровать HTTPS-трафик. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

###### Сертификат безопасности

To manage encrypted traffic, AdGuard installs its CA certificate on your device. Это безопасно: трафик фильтруется локально, а AdGuard проверяет безопасность соединения.

В старых версиях Android сертификат устанавливается автоматически. On Android 11 and later, you need to install it manually. [Инструкция по установке](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. Однако есть приложения, которые доверяют только сертификатам из системного хранилища. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Инструкция](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### Приложения с HTTPS-фильтрацией

В этом разделе содержится список приложений, для которых AdGuard фильтрует HTTPS-трафик. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

###### Сайты с HTTPS-фильтрацией

Эта настройка позволяет вам управлять сайтами, для которых AdGuard должен фильтровать HTTPS-трафик.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. При необходимости вы можете включить опцию *Фильтровать сайты с EV-сертификатами*.

##### Прокси

Вы можете настроить AdGuard так, чтобы он пропускал весь трафик вашего устройства через прокси-сервер. [Как настроить исходящий прокси](/adguard-for-android/solving-problems/outbound-proxy)

В этом разделе вы также можете настроить сторонний VPN для работы с AdGuard, если это разрешено вашим VPN-провайдером.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

##### Режим маршрутизации

Здесь вы можете выбрать метод фильтрации трафика.

- *Локальный VPN* фильтрует трафик через локально созданный VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

Режим *Локальный VPN* не позволяет использовать AdGuard одновременно с другими VPN. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. Для AdGuard VPN это делается автоматически с помощью [*Режима интеграции*](#integration-with-adguard-vpn).

:::

- *Автоматический прокси* — альтернативный метод маршрутизации трафика, не требующий использования VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Фильтры

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::note

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

#### Пользовательские скрипты

Userscripts are mini-programs written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra is a custom userscript that prevents websites from bypassing ad blockers and re-inserting blocked ads.

### Лицензия

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](#free-vs-full-version)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status if you have recently extended its validity
- Open the AdGuard account to manage your license there
- Reset your license – for example, if you've reached device limit for this license and want to apply another one

![License screen *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Поддержка

Use this section if you have any questions or suggestions regarding AdGuard for Android. Мы рекомендуем ознакомиться с *[FAQ](https://adguard.com/support/adguard_for_android.html)* или этой базой знаний, прежде чем обращаться в службу поддержки.

![Поддержка *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via *Report incorrect blocking*.

При необычном поведении приложения выберите *Сообщить об ошибке*. Если возможно, подробно опишите вашу проблему и добавьте логи приложения. [Как описать проблему](/guides/report-bugs/#how-to-describe-a-problem)

Для своих предложений используйте *Запросить функцию*.

:::note

GitHub — альтернативный способ сообщать об ошибках и предлагать новые функции. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::

### Free vs full version

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="Видеоплеер YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Есть бесплатная и платная версии AdGuard для Android. Платные функции расширяют возможности AdGuard:

- *Ad blocking in apps* allows you to block ads in non-browser apps. Вы можете перечислить приложения для фильтрации в разделе [*Управление приложениями*](#app-management)

:::note

AdGuard uses its own ad-free media player to block ads in YouTube videos. Чтобы воспользоваться им, откройте приложение YouTube и поделитесь видео с AdGuard. Эта функция бесплатна.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Защита от фишинга* предупреждает вас, если вы собираетесь посетить потенциально опасный сайт. [Back to Browsing Security](#browsing-security)

- *Собственные фильтры и правила* позволяют добавлять свои правила фильтрации и сторонние фильтры для более точной настройки блокировки рекламы. [Вернуться к фильтрам](#filters)

- *Userscripts* allow you to use AdGuard Extra to bypass ad blocker bans and install other userscripts to extend your browser's functionality. [Назад к пользовательским скриптам](#userscripts)

Вы можете получить доступ к этим функциям, [купив лицензию](https://adguard.com/license.html). [Как активировать лицензию](/general/license/activation/#activating-adguard-for-android)

### Рутованные и нерутованные устройства

Due to additional security measures of Android apps, some AdGuard features are only available on rooted devices. Вот их список:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Установка сертификата в системное хранилище возможна только на рутованных устройствах
- [**Автоматический прокси** в режиме маршрутизации](#routing-mode) требует root-доступа из-за ограничений Android на общесистемную фильтрацию трафика
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
