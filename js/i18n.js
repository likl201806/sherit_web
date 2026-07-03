/**
 * Sherit Website i18n
 * Embedded translations keep the site fully static.
 */

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', label: 'English' },
  { code: 'zh_hans', name: '简体中文', label: '简体中文' }
];

const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'sherit_language';

const ALL_TRANSLATIONS = {
  en: {
    meta: {
      lang: 'en',
      title: 'Sherit - Local Wi-Fi Chat and File Transfer',
      description: 'Sherit is a cross-platform local Wi-Fi chat and file transfer app for iPhone, Android, Mac, and Windows. No account, no cloud upload, no cable.'
    },
    nav: {
      home: 'Home',
      screenshots: 'Screenshots',
      features: 'Features',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      language: 'Language'
    },
    hero: {
      kicker: 'Local Wi-Fi sharing',
      title: 'Chat and transfer files across nearby devices.',
      subtitle: 'Sherit helps iPhone, Android, Mac, and Windows devices discover each other on the same Wi-Fi, then share messages, photos, videos, folders, clipboard content, and files without accounts or cloud uploads.',
      download: 'View downloads',
      learnMore: 'Get support',
      noAccount: 'No account',
      noCloud: 'No cloud upload',
      noCable: 'No cable',
      sameWifi: 'Same Wi-Fi'
    },
    screenshots: {
      title: 'Built for quick local sharing',
      subtitle: 'Drop in the localized screenshots later and the page will automatically use the matching language assets.',
      nearby: 'Nearby devices',
      chat: 'Chat and transfer',
      receive: 'Receive settings and history',
      placeholder: 'Screenshot placeholder'
    },
    features: {
      title: 'Why choose Sherit?',
      subtitle: 'Fast local discovery, flexible transfer options, and privacy-friendly sharing for everyday cross-device work.',
      discoverTitle: 'Scan nearby devices',
      discoverDesc: 'Automatically find iPhone, Android, Mac, and Windows devices connected to the same local network.',
      chatTitle: 'Chat while transferring',
      chatDesc: 'Send text, photos, videos, audio, documents, folders, and clipboard content in the same conversation.',
      folderTitle: 'Share entire folders',
      folderDesc: 'Move complete folders and mixed file types between phone and computer without a cable.',
      reconnectTitle: 'Reconnect quickly',
      reconnectDesc: 'Local chat history keeps recent conversations ready when both devices keep Sherit open in the foreground.',
      profileTitle: 'Personal profiles',
      profileDesc: 'Set your avatar, nickname, and signature, and nearby devices can see your latest profile.',
      receiveTitle: 'Smart receiving',
      receiveDesc: 'Choose whether to confirm before receiving files, or automatically import photos and videos.',
      historyTitle: 'Transfer history',
      historyDesc: 'Keep a local record of file transfers so shared items are easier to review and manage.',
      privacyTitle: 'LAN-only by design',
      privacyDesc: 'Transfers happen through your local Wi-Fi network instead of being uploaded to Sherit cloud servers.'
    },
    download: {
      title: 'Download Sherit',
      subtitle: 'Get Sherit on your device. iPhone, iPad, and Mac open the App Store; Android and Windows download directly.',
      appStore: 'App Store',
      onAppStore: 'On the App Store',
      directDownload: 'Direct download',
      iphone: 'iPhone',
      ipad: 'iPad',
      mac: 'Mac',
      android: 'Android (APK)',
      windows: 'Windows'
    },
    footer: {
      tagline: 'Local Wi-Fi chat and file transfer for nearby devices.',
      product: 'Product',
      features: 'Features',
      downloads: 'Downloads',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      contact: 'Contact us',
      copyright: '© 2026 Sherit. All rights reserved.'
    },
    support: {
      metaTitle: 'Support - Sherit',
      metaDescription: 'Sherit support, FAQs, troubleshooting, and contact information.',
      title: 'Support',
      subtitle: 'Answers for local discovery, transfer, receiving, and troubleshooting.',
      contactTitle: 'Need help?',
      contactText: 'Send us an email with your device model, system version, and what you were trying to transfer.',
      contactEmail: '759447915@qq.com',
      faqTitle: 'Frequently Asked Questions',
      q1: 'Which devices does Sherit support?',
      a1: 'Sherit is designed for iPhone, Android, Mac, and Windows devices on the same Wi-Fi network.',
      q2: 'Do devices need to use the same Wi-Fi?',
      a2: 'Yes. Nearby discovery and local transfers require both devices to be connected to the same local network.',
      q3: 'Do I need an account?',
      a3: 'No. Sherit does not require account registration before nearby chat or file transfer.',
      q4: 'Are files uploaded to the cloud?',
      a4: 'No. Sherit is designed around local network transfer. Files are sent between nearby devices over the local Wi-Fi network.',
      q5: 'Why can’t I find another device?',
      a5: 'Make sure both devices are on the same Wi-Fi, Sherit is open in the foreground, local network permission is allowed, and firewall or VPN settings are not blocking discovery.',
      q6: 'Can I transfer folders?',
      a6: 'Yes. Sherit supports sending entire folders along with photos, videos, audio, documents, and other files.',
      q7: 'Where are received files saved?',
      a7: 'Received files are saved on the receiving device. Photos and videos can be imported automatically when you enable smart receiving options.',
      q8: 'How do I send feedback?',
      a8: 'Use the in-app feedback entry when available, or email us directly with screenshots, logs, and steps to reproduce the issue.'
    },
    privacy: {
      metaTitle: 'Privacy Policy - Sherit',
      metaDescription: 'Sherit privacy policy for local Wi-Fi chat and file transfer.',
      title: 'Privacy Policy',
      updated: 'Last updated: July 2, 2026',
      introTitle: 'Overview',
      introP1: 'Sherit is built for local Wi-Fi chat and file transfer. This policy explains what information may be used when you use Sherit and how local sharing is designed to work.',
      introP2: 'By using Sherit, you agree to this privacy policy. If you do not agree, please stop using the app.',
      localTitle: 'Local-first transfers',
      localP: 'Sherit is designed to transfer files between nearby devices on the same local Wi-Fi network. Files are not uploaded to Sherit cloud servers for normal chat and transfer.',
      noAccountTitle: 'No account registration',
      noAccountP: 'Sherit does not require you to create an account. You can discover nearby devices and start sharing without registering a cloud identity with us.',
      storedTitle: 'Information stored on your device',
      storedP: 'Chat history, transfer history, and app settings are stored locally on your device so you can continue conversations and review previous transfers.',
      profileTitle: 'Profile information',
      profileP: 'You may choose to set an avatar, nickname, and signature. Nearby devices may see this profile information when discovering or chatting with you.',
      receivingTitle: 'Photos, videos, files, and folders',
      receivingP: 'When you send or receive content, Sherit processes that content only as needed to complete the local transfer and save it on the receiving device.',
      diagnosticsTitle: 'Feedback and diagnostics',
      diagnosticsP: 'If you choose to send feedback, you may provide screenshots, logs, device details, or a description of the issue. We use that information only to understand and resolve your request.',
      permissionsTitle: 'Device permissions',
      permissionsP: 'Sherit may request permissions such as local network, photos, files, notifications, or clipboard access depending on the feature you use. You can manage these permissions in your system settings.',
      securityTitle: 'Security',
      securityP: 'Local network transfer can reduce unnecessary internet exposure, but you should still share only with devices and people you trust.',
      updatesTitle: 'Policy updates',
      updatesP: 'We may update this policy as Sherit evolves. The updated policy will show a new last updated date.',
      contactTitle: 'Contact us',
      contactP: 'If you have questions about this privacy policy, contact us at 759447915@qq.com.'
    },
    terms: {
      metaTitle: 'Terms of Service - Sherit',
      metaDescription: 'Sherit terms of service for local Wi-Fi chat and file transfer.',
      title: 'Terms of Service',
      updated: 'Last updated: July 2, 2026',
      serviceTitle: 'Service description',
      serviceP1: 'Sherit provides local Wi-Fi device discovery, chat, and file transfer features for nearby devices.',
      serviceP2: 'By using Sherit, you agree to use the app responsibly and in compliance with applicable laws.',
      useTitle: 'Acceptable use',
      useP: 'You may not use Sherit to send illegal, harmful, infringing, abusive, or unauthorized content. Do not attempt to disrupt, reverse engineer, or misuse the app or another user’s device.',
      contentTitle: 'Your content',
      contentP: 'You are responsible for the messages, files, folders, clipboard content, and media you choose to send or receive through Sherit. Only share content that you have the right to share.',
      networkTitle: 'Local network and device requirements',
      networkP: 'Sherit depends on local network availability, system permissions, device state, firewall settings, and platform behavior. Discovery or transfer may fail when these conditions block communication.',
      privacyTitle: 'Privacy and permissions',
      privacyP: 'Sherit may request permissions required for discovery, transfer, media import, notifications, and related features. Please review the privacy policy for more detail.',
      availabilityTitle: 'Availability',
      availabilityP: 'Sherit is provided as available. Features may change, be interrupted, or work differently across platforms and operating system versions.',
      liabilityTitle: 'Limitation of liability',
      liabilityP: 'To the extent permitted by law, we are not responsible for indirect losses, data loss caused by user action, network failure, device settings, or unsupported usage.',
      updatesTitle: 'Changes to these terms',
      updatesP: 'We may update these terms from time to time. Continuing to use Sherit after updates means you accept the revised terms.',
      contactTitle: 'Contact us',
      contactP: 'If you have questions about these terms, contact us at 759447915@qq.com.'
    }
  },
  zh_hans: {
    meta: {
      lang: 'zh-Hans',
      title: 'Sherit - 局域网聊天与文件传输',
      description: 'Sherit 是一款跨平台局域网聊天与文件传输工具，支持 iPhone、Android、Mac、Windows。同一 Wi-Fi 下即可快速分享，无需账号、无需云端上传、无需数据线。'
    },
    nav: {
      home: '首页',
      screenshots: '截图',
      features: '功能',
      privacy: '隐私协议',
      terms: '用户政策',
      support: '技术支持',
      language: '语言'
    },
    hero: {
      kicker: '局域网 Wi-Fi 共享',
      title: '在附近设备之间聊天与传输文件。',
      subtitle: 'Sherit 可让 iPhone、Android、Mac、Windows 设备在同一 Wi-Fi 下互相发现，并快速发送文本、图片、视频、文件夹、剪贴板内容和各类文件，无需注册账号，也无需上传云端。',
      download: '查看下载',
      learnMore: '技术支持',
      noAccount: '无需账号',
      noCloud: '无需云端上传',
      noCable: '无需数据线',
      sameWifi: '同一 Wi-Fi'
    },
    screenshots: {
      title: '为快速局域网共享而设计',
      subtitle: '后续放入本地化截图后，页面会自动根据当前语言加载对应资源。',
      nearby: '附近设备',
      chat: '聊天与传输',
      receive: '接收设置与历史记录',
      placeholder: '截图占位'
    },
    features: {
      title: '为什么选择 Sherit？',
      subtitle: '快速发现、灵活传输、隐私友好，让跨设备协作更轻松。',
      discoverTitle: '扫描附近设备',
      discoverDesc: '自动发现同一局域网内的 iPhone、Android、Mac、Windows 设备，点击即可开始聊天。',
      chatTitle: '边聊边传',
      chatDesc: '在聊天中发送文本、照片、视频、音频、文件、文件夹和剪贴板内容。',
      folderTitle: '传输整个文件夹',
      folderDesc: '手机与电脑之间可传输完整文件夹和混合类型文件，无需连接数据线。',
      reconnectTitle: '快速重新连接',
      reconnectDesc: '首次聊天后，本地聊天记录会保留；双方前台运行时，可从聊天列表继续聊天。',
      profileTitle: '个人资料',
      profileDesc: '自由设置头像、昵称和个性签名，对方设备可看到你的最新资料。',
      receiveTitle: '智能接收',
      receiveDesc: '可选择接收前确认，也可开启照片、视频自动导入，让接收流程更顺手。',
      historyTitle: '传输历史记录',
      historyDesc: '自动保存文件传输记录，方便之后查看、查找和管理。',
      privacyTitle: '局域网内传输',
      privacyDesc: '文件通过本地 Wi-Fi 网络在设备之间传输，不上传到 Sherit 云端服务器。'
    },
    download: {
      title: '下载 Sherit',
      subtitle: '在你的设备上获取 Sherit。iPhone、iPad、Mac 将跳转 App Store，Android 与 Windows 可直接下载。',
      appStore: 'App Store',
      onAppStore: '前往 App Store',
      directDownload: '直接下载',
      iphone: 'iPhone',
      ipad: 'iPad',
      mac: 'Mac',
      android: 'Android（APK）',
      windows: 'Windows'
    },
    footer: {
      tagline: '适用于附近设备的局域网聊天与文件传输工具。',
      product: '产品',
      features: '功能特点',
      downloads: '下载',
      legal: '法律',
      privacy: '隐私协议',
      terms: '用户政策',
      support: '支持',
      contact: '联系我们',
      copyright: '© 2026 Sherit. 保留所有权利。'
    },
    support: {
      metaTitle: '技术支持 - Sherit',
      metaDescription: 'Sherit 技术支持、常见问题、故障排查与联系方式。',
      title: '技术支持',
      subtitle: '关于设备发现、文件传输、接收设置和故障排查的常见答案。',
      contactTitle: '需要帮助？',
      contactText: '请通过邮件告诉我们你的设备型号、系统版本，以及当时正在传输的内容。',
      contactEmail: '759447915@qq.com',
      faqTitle: '常见问题',
      q1: 'Sherit 支持哪些设备？',
      a1: 'Sherit 面向同一 Wi-Fi 下的 iPhone、Android、Mac、Windows 设备。',
      q2: '设备必须连接同一个 Wi-Fi 吗？',
      a2: '是的。附近设备发现和局域网传输需要双方连接到同一个本地网络。',
      q3: '需要注册账号吗？',
      a3: '不需要。Sherit 无需注册账号即可发现附近设备并开始聊天或传输文件。',
      q4: '文件会上传到云端吗？',
      a4: '不会。Sherit 以局域网传输为核心，文件通过本地 Wi-Fi 在附近设备之间发送。',
      q5: '为什么找不到另一台设备？',
      a5: '请确认双方连接同一 Wi-Fi、Sherit 保持前台运行、已允许本地网络权限，并检查防火墙或 VPN 是否阻止设备发现。',
      q6: '可以传输文件夹吗？',
      a6: '可以。Sherit 支持发送整个文件夹，也支持照片、视频、音频、文档和其他文件。',
      q7: '收到的文件保存在哪里？',
      a7: '收到的文件会保存在接收设备上。开启智能接收后，照片和视频可以自动导入。',
      q8: '如何反馈问题？',
      a8: '可通过应用内反馈入口提交；也可以直接发送邮件，并附上截图、日志和复现步骤。'
    },
    privacy: {
      metaTitle: '隐私协议 - Sherit',
      metaDescription: 'Sherit 局域网聊天与文件传输隐私协议。',
      title: '隐私协议',
      updated: '最后更新日期：2026年7月2日',
      introTitle: '概述',
      introP1: 'Sherit 是一款面向局域网 Wi-Fi 聊天与文件传输的应用。本协议说明你在使用 Sherit 时可能涉及的信息，以及局域网共享的工作方式。',
      introP2: '使用 Sherit 即表示你同意本隐私协议。如果你不同意，请停止使用本应用。',
      localTitle: '本地优先的传输方式',
      localP: 'Sherit 设计用于在同一局域网 Wi-Fi 下的附近设备之间传输文件。正常聊天和传输过程中，文件不会上传到 Sherit 云端服务器。',
      noAccountTitle: '无需账号注册',
      noAccountP: 'Sherit 不要求你创建账号。你可以无需向我们注册云端身份，即可发现附近设备并开始分享。',
      storedTitle: '保存在设备上的信息',
      storedP: '聊天记录、文件传输记录和应用设置会保存在你的本机设备上，以便继续聊天或查看历史传输。',
      profileTitle: '个人资料信息',
      profileP: '你可以选择设置头像、昵称和个性签名。附近设备在发现或聊天时可能看到这些资料。',
      receivingTitle: '照片、视频、文件和文件夹',
      receivingP: '当你发送或接收内容时，Sherit 仅为完成局域网传输和保存到接收设备而处理这些内容。',
      diagnosticsTitle: '反馈与诊断信息',
      diagnosticsP: '如果你主动发送反馈，可能会提供截图、日志、设备信息或问题描述。我们仅将这些信息用于理解和解决你的请求。',
      permissionsTitle: '设备权限',
      permissionsP: '根据你使用的功能，Sherit 可能请求本地网络、照片、文件、通知或剪贴板等权限。你可以在系统设置中管理这些权限。',
      securityTitle: '安全',
      securityP: '局域网传输可以减少不必要的互联网暴露，但你仍应只与可信任的设备和人员共享内容。',
      updatesTitle: '协议更新',
      updatesP: '随着 Sherit 功能变化，我们可能更新本协议。更新后的协议会显示新的最后更新日期。',
      contactTitle: '联系我们',
      contactP: '如果你对本隐私协议有任何疑问，请通过 759447915@qq.com 联系我们。'
    },
    terms: {
      metaTitle: '用户政策 - Sherit',
      metaDescription: 'Sherit 局域网聊天与文件传输用户政策。',
      title: '用户政策',
      updated: '最后更新日期：2026年7月2日',
      serviceTitle: '服务说明',
      serviceP1: 'Sherit 为附近设备提供局域网 Wi-Fi 设备发现、聊天和文件传输功能。',
      serviceP2: '使用 Sherit 即表示你同意以负责任的方式使用本应用，并遵守适用法律法规。',
      useTitle: '使用规范',
      useP: '你不得使用 Sherit 发送违法、有害、侵权、骚扰或未经授权的内容，也不得干扰、逆向工程、滥用本应用或他人设备。',
      contentTitle: '你的内容',
      contentP: '你应对通过 Sherit 发送或接收的消息、文件、文件夹、剪贴板内容和媒体负责。请仅分享你有权分享的内容。',
      networkTitle: '本地网络与设备要求',
      networkP: 'Sherit 依赖本地网络可用性、系统权限、设备状态、防火墙设置和平台行为。当这些条件阻止通信时，设备发现或文件传输可能失败。',
      privacyTitle: '隐私与权限',
      privacyP: 'Sherit 可能请求设备发现、传输、媒体导入、通知等功能所需权限。更多说明请查看隐私协议。',
      availabilityTitle: '服务可用性',
      availabilityP: 'Sherit 按现状提供。功能可能发生变化、中断，或在不同平台和系统版本上表现不同。',
      liabilityTitle: '责任限制',
      liabilityP: '在法律允许范围内，我们不对间接损失、因用户操作、网络故障、设备设置或不受支持的使用方式造成的数据损失承担责任。',
      updatesTitle: '政策变更',
      updatesP: '我们可能不时更新本政策。更新后继续使用 Sherit，即表示你接受修订后的政策。',
      contactTitle: '联系我们',
      contactP: '如果你对本用户政策有任何疑问，请通过 759447915@qq.com 联系我们。'
    }
  }
};

let translations = {};
let currentLanguage = DEFAULT_LANGUAGE;

function getBrowserLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh_hans';
  return DEFAULT_LANGUAGE;
}

function getNestedValue(source, key) {
  return key.split('.').reduce(function(value, part) {
    if (value && typeof value === 'object' && part in value) {
      return value[part];
    }
    return undefined;
  }, source);
}

function t(key) {
  const value = getNestedValue(translations, key);
  if (value === undefined || value === null) return key;
  return value;
}

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element && content) {
    element.setAttribute('content', content);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    element.textContent = t(element.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(element) {
    element.innerHTML = t(element.getAttribute('data-i18n-html'));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(function(element) {
    element.setAttribute('title', t(element.getAttribute('data-i18n-title')));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(function(element) {
    element.setAttribute('aria-label', t(element.getAttribute('data-i18n-aria-label')));
  });

  const pageKey = document.body.dataset.page || 'home';
  const metaTitle = pageKey === 'home' ? t('meta.title') : t(pageKey + '.metaTitle');
  const metaDescription = pageKey === 'home' ? t('meta.description') : t(pageKey + '.metaDescription');

  document.title = metaTitle;
  setMetaContent('meta[name="description"]', metaDescription);
  document.documentElement.lang = t('meta.lang');

  updateLocalizedImages();
}

const SCREENSHOT_EXTENSIONS = ['png', 'jpeg', 'jpg'];

function localizedScreenshotSrc(index, extensionIndex) {
  const ext = SCREENSHOT_EXTENSIONS[extensionIndex];
  if (!ext) return null;
  return 'assets/images/screenshots/' + currentLanguage + '_' + index + '.' + ext;
}

function bindLocalizedScreenshotFallback(img) {
  if (img.dataset.screenshotFallbackBound === 'true') return;
  img.dataset.screenshotFallbackBound = 'true';

  img.addEventListener('error', function() {
    if (!img.hasAttribute('data-localized-screenshot')) return;

    const index = img.getAttribute('data-localized-screenshot');
    const nextIndex = parseInt(img.dataset.screenshotExtIndex || '0', 10) + 1;
    const nextSrc = localizedScreenshotSrc(index, nextIndex);
    if (nextSrc) {
      img.dataset.screenshotExtIndex = String(nextIndex);
      img.src = nextSrc;
    }
  });
}

function updateLocalizedImages() {
  document.querySelectorAll('[data-localized-screenshot]').forEach(function(img) {
    bindLocalizedScreenshotFallback(img);
    img.classList.remove('screenshot-loaded');
    img.dataset.screenshotExtIndex = '0';
    const src = localizedScreenshotSrc(img.getAttribute('data-localized-screenshot'), 0);
    if (src) {
      img.src = src;
    }
  });
}

function updateLanguageSelector() {
  const current = SUPPORTED_LANGUAGES.find(function(language) {
    return language.code === currentLanguage;
  });

  document.querySelectorAll('.current-lang').forEach(function(element) {
    element.textContent = current ? current.label : 'Language';
  });

  const dropdown = document.querySelector('.lang-dropdown');
  if (!dropdown) return;

  dropdown.innerHTML = '';
  SUPPORTED_LANGUAGES.forEach(function(language) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lang-option' + (language.code === currentLanguage ? ' active' : '');
    button.textContent = language.name;
    button.addEventListener('click', function() {
      changeLanguage(language.code);
    });
    dropdown.appendChild(button);
  });
}

function toggleLanguageDropdown() {
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.classList.toggle('open');
  }
}

function changeLanguage(lang) {
  if (!ALL_TRANSLATIONS[lang]) return;

  currentLanguage = lang;
  translations = ALL_TRANSLATIONS[lang];
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations();
  updateLanguageSelector();

  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.classList.remove('open');
  }
}

function initI18n() {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  const initialLang = ALL_TRANSLATIONS[savedLang] ? savedLang : getBrowserLanguage();
  changeLanguage(initialLang);
}

document.addEventListener('click', function(event) {
  const selector = document.getElementById('language-selector');
  if (selector && !selector.contains(event.target)) {
    selector.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', initI18n);
