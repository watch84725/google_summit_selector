let agendaItems = [
    { startTime: "09:30", endTime: "09:55", activity: "主題演講 | 領航智匯雲端新紀元", location: "現場"},
    { startTime: "09:55", endTime: "11:25", activity: "主題演講 | 解密 Google AI 最前線" , location: "現場"},
    { startTime: "11:25", endTime: "12:00", activity: "主題演講 | 為企業奠定 AI 基石" , location: "現場"},
    { startTime: "12:15", endTime: "12:25", activity: "別讓你的 AI 學壞了，確保資料可視性及安全性" , location: "線上"},
    { startTime: "12:30", endTime: "12:40", activity: "Vertex AI 實戰解析：企業應用案例分享", location: "線上" },
    { startTime: "12:45", endTime: "12:55", activity: "當 Gemini 遇上大數據"  , location: "線上"},
    { startTime: "13:10", endTime: "13:40", activity: "Decode Penalty Kick!"  , location: "線上"},
    { startTime: "13:30", endTime: "13:55", activity: "小 Po, 請幫我部署一下"  , location: "線上"},
    { startTime: "13:30", endTime: "14:05", activity: "讓雲端算力加速企業 AI 佈局" , location: "701A 會議室" },
    { startTime: "13:30", endTime: "14:05", activity: "打造值得信任的雲端環境", location: "701B 會議室" },
    { startTime: "13:30", endTime: "14:05", activity: "Gemini on Vertex AI 全面解析", location: "701C 會議室"  },
    { startTime: "13:30", endTime: "14:05", activity: "透過 Gemini 及 Code Transformations 加速軟體交付流程" , location: "701D 會議室"  },
    { startTime: "13:45", endTime: "14:00", activity: "使用 Gemini 全面提升開發者體驗"  , location: "線上"},
    { startTime: "14:05", endTime: "14:30", activity: "Telligent 3.0 SaaS 平台" , location: "線上" },
    { startTime: "14:10", endTime: "14:30", activity: "Google AI 打造全新廣告行銷體驗" , location: "線上" },
    { startTime: "14:15", endTime: "14:50", activity: "金融業多雲及混合雲應用實例", location: "701A 會議室" },
    { startTime: "14:15", endTime: "14:50", activity: "借助 Google Security Operations 翻新資安營運模式" , location: "701B 會議室" },
    { startTime: "14:15", endTime: "14:50", activity: "透過 Vertex AI 打造企業助理", location: "701C 會議室"   },
    { startTime: "14:15", endTime: "14:50", activity: "AI 驅動的生產力：成為 Google Workspace 中 Gemini Multi-Prompt 的專家"  , location: "701D 會議室"  },
    { startTime: "14:40", endTime: "15:05", activity: "AI 賦能 x OMO 數據整合，強化零售業顧客體驗" , location: "線上" },
    { startTime: "14:45", endTime: "15:00", activity: "牙勒牙勒～大小姐再不用數據與 AI 分析，我們的執事咖啡車就要倒閉去睡公園啦" , location: "線上" },
    { startTime: "15:00", endTime: "15:35", activity: "透過 Google Cloud VMware Engine 快速實現企業上雲和轉型願景" , location: "701A 會議室"},
    { startTime: "15:00", endTime: "15:35", activity: "透過 Google Cloud Network Security 強化雲端防護", location: "701B 會議室"  },
    { startTime: "15:00", endTime: "15:35", activity: "剖析 BigQuery 最新功能並打造即時資料與 AI Pipeline" , location: "701C 會議室"  },
    { startTime: "15:00", endTime: "15:35", activity: "借助 Google Cloud 無伺服器平台開創轉型之路"  , location: "701D 會議室"  },
    { startTime: "15:10", endTime: "15:25", activity: "欲窮千里目，讓 Gemini for Google Workspace 帶你更上一層樓"  , location: "線上"},
    { startTime: "15:15", endTime: "15:40", activity: "新世代 App 安全防禦架構" , location: "線上" },
    { startTime: "15:45", endTime: "16:00", activity: "安全使用 AI 服務" , location: "線上" },
    { startTime: "15:50", endTime: "16:15", activity: "用 50 億訊息玩 AI —— 利用 GenAI 改善數據驅動決策，提升數據品質 20 倍"  , location: "線上"},
    { startTime: "15:55", endTime: "16:30", activity: "資料庫及生成式 AI 的未來", location: "701A 會議室" },
    { startTime: "15:55", endTime: "16:30", activity: "AI 與安全：產品及資料防護心法" , location: "701B 會議室" },
    { startTime: "15:55", endTime: "16:30", activity: "AI 與零售：從個人化體驗到營運最佳化", location: "701C 會議室"   },
    { startTime: "15:55", endTime: "16:30", activity: "透過 MongoDB 及 GKE 打造高效且可擴展的新一代 AI/ML 工作負載" , location: "701D 會議室"   },
    { startTime: "16:10", endTime: "16:25", activity: "深入淺出 Google Gemma 開源模型"  , location: "線上"},
    { startTime: "16:25", endTime: "16:50", activity: "MoBagel AI 營銷加速器：在 Google 雲端平台上，打造 5A+ 級市場策略" , location: "線上" },
    { startTime: "16:40", endTime: "17:15", activity: "AI 技術資料庫遷移與管理" , location: "701A 會議室"},
    { startTime: "16:40", endTime: "17:15", activity: "透過 Google Cloud 打造堅固企業持續性及資料防護機制", location: "701B 會議室"  },
    { startTime: "16:40", endTime: "17:15", activity: "透過 BigQuery 及 Gemini 強化屬於您的生成式 AI 資料分析技術" , location: "701C 會議室"  },
    { startTime: "16:40", endTime: "17:15", activity: "如何簡化應用程式疑難排解並利用 Gemini 觀測分析" , location: "701D 會議室"   }
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
            
            listItem.addEventListener('mouseenter', function() {
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
