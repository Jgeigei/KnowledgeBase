---
title: Как создать файл дампа
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Для диагностики проблем и ошибок, с которыми пользователи могут столкнуться при использовании AdGuard, службе поддержки может понадобиться файл дампа. Файл дампа помогает разработчикам увидеть процессы, которые выполнялись в приложении за определённый период времени. Ниже вы можете ознакомиться с инструкциями о том, как собрать файл дампа на вашем компьютере.

1. Нажмите **Ctrl + Shift + Esc** и нажмите **Диспетчер задач**

1. В верхней строке меню выберите **Подробности**

    ![Сведения о диспетчере задач](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Щёлкните правой кнопкой мыши на процесс, для которого вы хотите создать файл дампа (например, служба поддержки может попросить вас создать дамп для `Adguard.exe`)

1. В раскрывающемся меню нажмите **Создать файл дампа**

1. Файл успешно создан!

    ![Create dump file](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

After you’ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the **%tmp%** folder. Созданный файл дампа (`.DMP`) имеет то же название, что и процесс, который вы выбрали в предыдущих пунктах. Файл довольно большой, поэтому перед отправкой в поддержку сожмите его в архив.

:::note

AdGuard for Windows has two running processes (`Adguard.exe` and `AdguardSvc.exe`). Поэтому вам нужно создать файл дампа отдельно для каждого процесса.

:::

![Процессы AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. [Здесь](../adguard-logs) вы можете ознакомиться с инструкцией по сбору логов AdGuard.
