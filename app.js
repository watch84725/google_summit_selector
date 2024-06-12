let agendaItems = [
    { startTime: "09:30", endTime: "09:55", activity: "主題演講 | 領航智匯雲端新紀元", location: "現場" , brief:"" },
    { startTime: "09:55", endTime: "11:25", activity: "主題演講 | 解密 Google AI 最前線" , location: "現場" , brief:"" },
    { startTime: "11:25", endTime: "12:00", activity: "主題演講 | 為企業奠定 AI 基石" , location: "現場" , brief:"" },
    { startTime: "12:15", endTime: "12:25", activity: "別讓你的 AI 學壞了，確保資料可視性及安全性" , location: "線上", brief:"經過幾年來的 AI 技術發展，各行各業的企業無論規模大小都在積極投資開發自己的AI工具。 然而，在這個過程中，如何預防關鍵AI數據的洩露或被非法存取是一個重大的挑戰。 在本次議程中，我們將介紹Palo Alto Networks如何幫助企業保障其重要數據安全。"},
    { startTime: "12:30", endTime: "12:40", activity: "Vertex AI 實戰解析：企業應用案例分享", location: "線上" , brief:"與 AI 聊天機器人對話的時候，您是否想過「要是 AI 也能回答企業內部的問題就好了～」思想科技 Master Concept 以真實經驗與您分享應用案例，透過 Google Cloud 建置企業客製資料庫，讓您不必再面對滿坑滿谷的內部文件，輕鬆找出想要的答案！"},
    { startTime: "12:45", endTime: "12:55", activity: "當 Gemini 遇上大數據"  , location: "線上", brief:"CH 主講內容包括 Gemini 導入、大數據架構，以及適用於零售電商、製造業和 Cloud Native 產業中的情境應用。如何利用 Google Cloud 的最新技術提高數據處理效率，並分享可擴展大數據架構的最佳實踐。此外，還會探討 cacaFly 如何協助電商平台在推薦系統以及商品貼標、製造業整合雲地生成式 KM 檢索，以及助力企業實現敏捷開發和快速部署。"},
    { startTime: "13:10", endTime: "13:40", activity: "Decode Penalty Kick!"  , location: "線上" , brief:""},
    { startTime: "13:30", endTime: "13:55", activity: "小 Po, 請幫我部署一下"  , location: "線上", brief:"RAPD PO 是一個運用 Kubernetes Operator 的自動化工具，專為軟體開發團隊設計，以簡化和加速部署過程。這個工具能夠根據您提供的部署需求，自動在不同雲服務上建立環境並交付軟體。無論您是需要快速部署新版本的應用，或是調整現有的部署設定，RAPD PO 都能提供幫助。它就像是您團隊中的小 Po 工程師，隨時待命，準備執行各種部署任務，讓您可以專注於核心的軟體開發工作。使用 RAPD PO，讓部署變得輕鬆而高效！"},
    { startTime: "13:30", endTime: "14:05", activity: "讓雲端算力加速企業 AI 佈局" , location: "701A 會議室"  , brief:"Google Cloud 在 2024 年第一季度 Forrester Wave 的人工智慧基礎設施解決方案的調查中， 被評為領導者。參與本次議程，了解為什麼 Google Cloud 將成為企業在 AI 世代中值得信賴的夥伴與平台。" },
    { startTime: "13:30", endTime: "14:05", activity: "打造值得信任的雲端環境", location: "701B 會議室", brief:"本環節將帶您了解 Google Cloud 如何打造安全的環境及相關核心原則，包含安全機制的設計、預設項目及營運細節等。我們亦將讓您了解 Google Cloud 如何協助企業打造可信任且安全的雲端環境，協助您在創新的同時兼顧資料與應用程式防護機制。" },
    { startTime: "13:30", endTime: "14:05", activity: "Gemini on Vertex AI 全面解析", location: "701C 會議室" , brief:"如何展開生成式 AI 的旅程，是許多企業關注的重點。本環節將讓您了解建立基礎模型時時需要的工具與技術，同時帶領您探索 Google Cloud Console 中的 Gemini 技術，進而評估最適合己身企業的使用狀況。"  },
    { startTime: "13:30", endTime: "14:05", activity: "透過 Gemini 及 Code Transformations 加速軟體交付流程" , location: "701D 會議室"  , brief:"透過與 VSCode 以及 JetBrain 等開發環境 (IDE) 整合的 Gemini，能顯著提升軟體交付和安全性。在本場次中，您將學習如何利用 Code Transformations 的強大功能，簡化軟體開發生命週期中的多項任務，例如程式碼優化或問題排查。" },
    { startTime: "13:45", endTime: "14:00", activity: "使用 Gemini 全面提升開發者體驗"  , location: "線上" , brief:"開發者的日常充滿挑戰，從開發、測試到部署，每個環節都可能遇到各種難題。讓我們一起來看看如何讓Gemini成為開發團隊的最佳幫手！"},
    { startTime: "14:05", endTime: "14:30", activity: "Telligent 3.0 SaaS 平台" , location: "線上" , brief:"網訊電通公司簡介、Telligent 3.0 SaaS 平台介紹、Flow Chat 及 Flow Talk 產品功能介紹、電商及推薦系統產品功能介紹、GenAI 行銷生產力工具產品功能介紹"},
    { startTime: "14:10", endTime: "14:30", activity: "Google AI 打造全新廣告行銷體驗" , location: "線上" , brief:"" },
    { startTime: "14:15", endTime: "14:50", activity: "金融業多雲及混合雲應用實例", location: "701A 會議室"  , brief:"本次議程聚焦金融業雲端轉型，剖析上雲機會與挑戰，並探討如何評估與提升雲端治理的成熟度。同時將分享混合雲實例，包括如何利用雲端加速新型態運算（容器與AI）的應用，並透過雲端技術建構全球化的基礎架構，加速海外的佈局。最後分享雲端對於維運模式的衝擊，企業如何利用IaC與SRE改變日常維運，並落實雲端成本控管，助力金融業實現雲端價值最大化。"},
    { startTime: "14:15", endTime: "14:50", activity: "借助 Google Security Operations 翻新資安營運模式" , location: "701B 會議室", brief:"瞬息萬變且複雜多變的威脅，是 Security Operation Centers 的一大挑戰。本環節中，Google Security Operations 將協助您翻新資安營運模式，進而抵禦各式高風險與潛在威脅。" },
    { startTime: "14:15", endTime: "14:50", activity: "透過 Vertex AI 打造企業助理", location: "701C 會議室"  , brief:"若想透過完整性較低的工具及分散各處的資訊打造出高品質的研究結果，企業員工很可能需要花費許多寶貴時間與精力，方有機會完成。本環節將帶領您了解如何借助 Google Cloud Vertex AI 的力量打造強大的企業助理。這些 AI 技術工具可讓員工迅速找到相關資訊、彙整資訊及回答問題，甚至還可以生成內容。Vertex AI 可簡化各部門間的 AI 技術開發過程，包含行銷、銷售、財務及其他。我們的平台提供使用者友善的開發環境、預先建好的元件及完整性高的工具，可確保快速打造企業及 AI 應用程式的原型及高品質管理機制。此外，我們將邀請 Gamania 現身分享 AI 客服使用案例，帶您了解現實生活中的應用情境。"  },
    { startTime: "14:15", endTime: "14:50", activity: "AI 驅動的生產力：成為 Google Workspace 中 Gemini Multi-Prompt 的專家"  , location: "701D 會議室" , brief:"準備好見證 Google Workspace 的未來了嗎？我們將深入探討 Google Workspace 和 Gemini（Google 最新的生成式 AI）的強大整合。我們將展示 Gemini 如何增強 Gemini for Google Workspace 體驗，為用戶帶來前所未有的協作、創造力和生產力。"},
    { startTime: "14:40", endTime: "15:05", activity: "AI 賦能 x OMO 數據整合，強化零售業顧客體驗" , location: "線上", brief:"面對消費者的購物旅程複雜、行為足跡破碎、數據孤島等問題，顧問科技公司 beBit TECH 運用顧客體驗專業及 AI 賦能的顧客數據平台 「OmniSegment CDP」，以 CDP、自動化行銷、與商業智慧一站式整合工具，協助零售企業整合營運數據（O-Data）及體驗數據（X-Data），並進一步透過數據洞察，自動化會員分眾、貼標、溝通，強化 OMO 跨渠道的行銷體驗，深化會員經營及留存率" },
    { startTime: "14:45", endTime: "15:00", activity: "牙勒牙勒～大小姐再不用數據與 AI 分析，我們的執事咖啡車就要倒閉去睡公園啦" , location: "線上" , brief:"數據為 AI 之本，而生成式 AI 的誕生更是廣泛的賦能於不同的數據使用者，在這個 Cloud Talk 中，我們將透過行動咖啡車的案例分享，讓大家更快速清楚的了解數據分析與生成式 AI 的協作是如何相輔相成，互相拉抬形成生產力提升的飛輪效應。" },
    { startTime: "15:00", endTime: "15:35", activity: "透過 Google Cloud VMware Engine 快速實現企業上雲和轉型願景" , location: "701A 會議室" , brief:"Google Cloud VMware Engine (GCVE) 可讓您輕鬆執行雲端遷移並享有強大 VM 效能，助您強化資安機制且享有較低的 TCO，更可借助 Google Cloud 的技術完美打造 VM 環境、完成創新並打造絕佳災難復原解決方案。"},
    { startTime: "15:00", endTime: "15:35", activity: "透過 Google Cloud Network Security 強化雲端防護", location: "701B 會議室"  , brief:"Google Cloud 提供全面的雲端網路安全解決方案，以先進的機器學習技術和零信任架構，保護您的企業資料和應用程式免受各種威脅。本活動將展示最新的Next-Generation Firewall (NGFW), Secure Web Gateway等功能確保雲端環境的安全。"},
    { startTime: "15:00", endTime: "15:35", activity: "剖析 BigQuery 最新功能並打造即時資料與 AI Pipeline" , location: "701C 會議室", brief:"BigQuery 為 Google Cloud 的無伺服器資料倉儲，提供整合且統一的資料分析與 AI 平台。本節將帶領您探索和無伺服器架構、多雲端分析、實時分析與內建 AI 及機器學習相關的新功能，並了解如何運用 BigQuery 革命性的功能來整合即時資料及 AI 管線，協助企業更迅速以資料驅動決策、提升營運效率或打造個人化客戶體驗。"   },
    { startTime: "15:00", endTime: "15:35", activity: "借助 Google Cloud 無伺服器平台開創轉型之路"  , location: "701D 會議室"  , brief:"無伺服器 (Serverless) 是新的典範，也是在部署網站、網頁 API 或執行串流與批次資料處理時最簡單且最受歡迎的做法。本環節將帶領您了解 Cloud Run 及無伺服器相關產品，並邀請重磅客戶台積電分享運用 Google Cloud 無伺服器平台展開應用程式轉型之旅的親身經驗。" },
    { startTime: "15:10", endTime: "15:25", activity: "欲窮千里目，讓 Gemini for Google Workspace 帶你更上一層樓"  , location: "線上" , brief:"生成式 AI 極有可能改變工作的結構，透過一些個人活動的自動化來增強個別工作者的生產能力。 目前的生成式 AI 和其他相關技術，有潛力實現工作活動產能的自動化，與人類的即時協作是 Workspace 的關鍵差異。 現在我們可以新增一個人工智慧協作者。將人工智慧想像為您的共同創造者、腦力激盪合作夥伴、校對員等等。 憑藉對工作的深入了解以及研究、產生和轉換所有類型媒體的能力，它已準備好承擔雜務，讓人們能夠自由地做他們最擅長的事情。"},
    { startTime: "15:15", endTime: "15:40", activity: "新世代 App 安全防禦架構" , location: "線上" , brief:"HyperG Smart Security 簡介、國際 App 安全防禦技術分享及新世代 App 安全防禦架構"},
    { startTime: "15:45", endTime: "16:00", activity: "安全使用 AI 服務" , location: "線上", brief:"分享 AI 相關國際標準 (ISO42001) 及風險管理框架 (NIST AI RMF, Google Secure AI Framework, OWASP Top 10 for LLM)，說明 AI 應用情境威脅模型及防護機制，幫助您快速掌握使用 AI 服務，在管理層面及技術控制需要關注的內容。" },
    { startTime: "15:50", endTime: "16:15", activity: "用 50 億訊息玩 AI —— 利用 GenAI 改善數據驅動決策，提升數據品質 20 倍"  , location: "線上" , brief:"眾人爭相利用 GenAI 來改良組織運作，但我們如何確保組織能跟上 AI 創新的步伐？年發送 50 億訊息的全渠道行銷平台 ISV——漸強實驗室，將分享其如何選擇 GenAI 工具，又是如何透過 GenAI 降低 Data-driven 決策的門檻，並應用自動化回饋讓數據品質提高 20 倍。"},
    { startTime: "15:55", endTime: "16:30", activity: "資料庫及生成式 AI 的未來", location: "701A 會議室" , brief:"本環節將帶領您了解 Google Cloud 代管資料庫未來展望，尤其是 AlloyDB，其擁有向量搜尋能力，且深度整合至營運資料庫及強大企業生成式 AI 應用程式，運用柱狀引擎加速分析查詢，而不必修改程式碼，更結合以容器為主的 AlloyDB Omni，進一步將您的資料庫全面現代化 (也能運行於地端環境)。此外，我們亦帶領您探究 AI 的無限潛能，輕鬆打造前所未見的應用程式與資料庫互動方式。" },
    { startTime: "15:55", endTime: "16:30", activity: "AI 與安全：產品及資料防護心法" , location: "701B 會議室" , brief:"本環節將帶您深入了解如何防護 AI 產品及資料，免於滲透與其他網路安全威脅。此外，我們將帶您探索 Google Cloud 內建控管機制以避免資料滲透、運用 Google SAI 防護 AI 產品，以及評估與改善生成式 AI 安全性應用程式的最佳做法。此外，本環節將提及隱私優先的重要性，適用於生成式 AI 及 AI 生命週期資料防護策略。運用我們將於本環節中提供的心法，企業可強化己身 AI 產品與資料，確保其完整性及機密性。" },
    { startTime: "15:55", endTime: "16:30", activity: "AI 與零售：從個人化體驗到營運最佳化", location: "701C 會議室"   , brief:"本環節將帶領您了解 AI 技術在零售業的應用，探索如何帶來變革性創新，提升客戶體驗並簡化營運流程。我們將探索 BigQuery 與大型語言模型的無縫整合特性，讓您可透過非結構化資料擷取寶貴洞察，包含照片、文件及音訊檔案。我們將說明 BigQuery 的向量搜尋及多模態嵌入技術，其使用的是 Google 的先進 AI 技術。我們亦將帶您探索這些技術如何協助企業迅速打造 AI 大規模資料策略。此外，您亦可了解 BigQuery 資料如何節省空間、鞏固資料安全性、分享與變現，並開啟下一個世代的協作環境。" },
    { startTime: "15:55", endTime: "16:30", activity: "透過 MongoDB 及 GKE 打造高效且可擴展的新一代 AI/ML 工作負載" , location: "701D 會議室"   , brief:"隨著 AI 社群及生態系的蓬勃發展，開發人員不停探索如何運用新一代大型語言模型和向量資料庫等最新技術，以建構企業級生成式 AI 應用程式，並將其價值發揮到極致，而結合 MongoDB Atlas 技術的 Google Kubernetes Engine (GKE)，更是您在建立與部屬 AI 工作負載時的代管資料庫解決方案首選。GKE 提供進階管理功能、Cloud GPU 和 TPU 支援等優勢，而 MongoDB Atlas 的靈活文件模型及強大的向量搜索功能，都非常適合用來打新一代的 GenAI 應用服務。" },
    { startTime: "16:10", endTime: "16:25", activity: "深入淺出 Google Gemma 開源模型"  , location: "線上", brief:"2024 年，Google 推出開源大型語言模型（LLM）Gemma，Gemma 的輕量化特性，讓模型能夠運行在筆記型電腦等設備上，使 LLM 更加易於使用。本次主題，我們將帶大家一同了解 Gemma 模型，並且探索 Gemma 模型特色與應用方式，讓大家可以嘗試在日常工作與專案上，導入 Gemma 模型來進行實際應用。"},
    { startTime: "16:25", endTime: "16:50", activity: "MoBagel AI 營銷加速器：在 Google 雲端平台上，打造 5A+ 級市場策略" , location: "線上" , brief:"在本次演講中，我們將探索如何利用Google雲端平台快速部署高效的AI營銷解決方案。利用Google Cloud的強大工具和服務，打造出符合5A+市場策略，AI在每個行銷決策的關鍵，如何幫助企業進行市場細分、客戶行為預測及客製化銷售，從而提升客戶體驗和業績。本次也會展示企業如何在Google雲端平台上成功實現這些策略，使其在競爭激烈的市場中取得領先地位，共同探索AI營銷的強大潛力。" },
    { startTime: "16:40", endTime: "17:15", activity: "AI 技術資料庫遷移與管理" , location: "701A 會議室", brief:"本環節將會介紹 Google Cloud 最新的 Gemini 在資料庫領域中的應用，包含 Google Cloud 如何運用 AI 及大型語言模型的力量，提供以 AI 為主的遷移、開發、管理、疑難排除、最佳化及資料治理等。 以及資料庫搬遷服務 Database Migration Service 將支援 SQLServer 搬遷至 CloudSQL SQLServer 的新功能 !" },
    { startTime: "16:40", endTime: "17:15", activity: "透過 Google Cloud 打造堅固企業持續性及資料防護機制", location: "701B 會議室" , brief:"本次議程將說明如何在 Google Cloud 基礎架構上架構您的關鍵任務工作負載，以確保高可用性、彈性，並符合您的恢復點目標 (RPO) 和恢復時間目標 (RTO) 要求。我們將涵蓋架構、產品功能和操作程序，以確保您的組織能夠在中斷期間持續運作，從而保持關鍵任務工作負載正常運行。範例包括：輕鬆部署具有跨多個服務點彈性的關鍵數據庫工作負載、在發生災難時快速可靠地啟動工作負載，以及大規模且經濟高效地管理備份。" },
    { startTime: "16:40", endTime: "17:15", activity: "透過 BigQuery 及 Gemini 強化屬於您的生成式 AI 資料分析技術" , location: "701C 會議室" , brief:"傳統資料與分析系統無法滿足 AI 技術的獨特需求，尤其對於非結構化資料來說更是如此，而非結構化資料占所有資料的八成，但其由於破碎化且不完整的儲存特性，而無法發揮潛能。此外，AI 專案時常與移動複雜資料、安全與合規性風險等有關，可能導致嚴重延誤狀況。若希望精通 AI 相關專門工具及系統，更是需要大量時間與精力。本環節中，我們將帶領您了解如何借助 Google Cloud 的力量輕鬆解決這些問題。"  },
    { startTime: "16:40", endTime: "17:15", activity: "如何簡化應用程式疑難排解並利用 Gemini 觀測分析" , location: "701D 會議室"  , brief:"本環節將帶您了解如何運用 Google Cloud 平台工具與 OpenTelemetry，進而簡化疑難排除過程。此外，我們亦將說明在 Google Cloud 上營運時，如何整合 Gemini 的 AI 技術，打造具可觀測性的分析任務。"  }
];

function parseTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(1970, 0, 1, hours, minutes);
}

function isConflict(start1, end1, start2, end2) {
    return (start1 < end2 && start2 < end1);
}

function sortByStartTime(items) {
    return items.sort((a, b) => parseTime(a.startTime) - parseTime(b.startTime));
}

document.addEventListener('DOMContentLoaded', function() {
    const availableItemsList = document.getElementById('availableItems');
    const selectedItemsList = document.getElementById('selectedItems');
    const overlay = document.getElementById('overlay');
    const closeOverlayButton = document.getElementById('closeOverlayButton');
    let selectedItems = [];

    function renderAvailableItems() {
        availableItemsList.innerHTML = '';
        agendaItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'item';
            const startTime = parseTime(item.startTime);
            const endTime = parseTime(item.endTime);

            // 检查时间冲突
            const conflict = selectedItems.some(selectedItem => {
                const selectedStart = parseTime(selectedItem.startTime);
                const selectedEnd = parseTime(selectedItem.endTime);
                return isConflict(startTime, endTime, selectedStart, selectedEnd);
            });

            if (conflict) {
                listItem.classList.add('disabled');
            }

            listItem.innerHTML = `${item.startTime} - ${item.endTime} - ${item.activity} <br>地點: ${item.location} <button ${conflict ? 'disabled' : ''} onclick="addItem('${item.startTime}', '${item.endTime}', '${item.activity}', '${item.location}')">選擇</button>`;
            
            listItem.addEventListener('mouseenter', function(event) {
                const briefPopup = document.createElement('div');
                briefPopup.className = 'brief-popup';
                briefPopup.innerText = item.brief || '沒有簡要說明';
                document.body.appendChild(briefPopup);
                briefPopup.style.left = `${event.pageX + 10}px`;
                briefPopup.style.top = `${event.pageY + 10}px`;

                listItem.addEventListener('mousemove', function(event) {
                    briefPopup.style.left = `${event.pageX + 10}px`;
                    briefPopup.style.top = `${event.pageY + 10}px`;
                });

                listItem.addEventListener('mouseleave', function() {
                    if (document.body.contains(briefPopup)) {
                        document.body.removeChild(briefPopup);
                    }
                });

                const conflicts = agendaItems.filter(agendaItem => {
                    const agendaStart = parseTime(agendaItem.startTime);
                    const agendaEnd = parseTime(agendaItem.endTime);
                    return isConflict(startTime, endTime, agendaStart, agendaEnd) && agendaItem.activity !== item.activity;
                });

                conflicts.forEach(conflictItem => {
                    const conflictElement = [...availableItemsList.children].find(child => child.textContent.includes(conflictItem.activity));
                    if (conflictElement) {
                        conflictElement.classList.add('highlight');
                    }
                });
            });

            listItem.addEventListener('mouseleave', function() {
                document.querySelectorAll('.highlight').forEach(highlightedItem => {
                    highlightedItem.classList.remove('highlight');
                });
            });

            availableItemsList.appendChild(listItem);
        });
    }

    function renderSelectedItems() {
        selectedItemsList.innerHTML = '';
        selectedItems = sortByStartTime(selectedItems);
        selectedItems.forEach(item => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `<td class="time-col">${item.startTime} - ${item.endTime}</td><td class="activity-col">${item.activity}</td><td class="location-col">${item.location}</td><td class="operation-col"><button onclick="removeItem(this)">刪除</button></td>`;
            selectedItemsList.appendChild(listItem);
        });
    }

    window.addItem = function(startTime, endTime, activity, location) {
        selectedItems.push({ startTime, endTime, activity, location });
        renderSelectedItems();
        renderAvailableItems();

        // 移除所有现有的说明弹出窗口
        document.querySelectorAll('.brief-popup').forEach(popup => {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
        });
    }

    window.removeItem = function(button) {
        const row = button.parentElement.parentElement;
        const time = row.cells[0].innerText.split(' - ');
        const startTime = time[0].trim();
        const endTime = time[1].trim();
        const activity = row.cells[1].innerText;
        const location = row.cells[2].innerText;

        // 从已选择的项目中移除
        selectedItems = selectedItems.filter(item => item.startTime !== startTime || item.endTime !== endTime || item.activity !== activity || item.location !== location);

        renderSelectedItems();
        renderAvailableItems();
    }

    document.getElementById('downloadButton').addEventListener('click', function() {
        overlay.style.display = 'flex';
        const operationCols = document.querySelectorAll('.operation-col, .operation-header');
        operationCols.forEach(col => col.style.display = 'none');

        html2canvas(document.querySelector("#selectedItemsTable")).then(canvas => {
            let link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = 'selected_schedule.png';
            link.click();
            overlay.style.display = 'none';
            operationCols.forEach(col => col.style.display = '');
        }).catch(error => {
            console.error('Error generating image:', error);
            overlay.style.display = 'none';
            operationCols.forEach(col => col.style.display = '');
        });
    });

    closeOverlayButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    renderAvailableItems();
});