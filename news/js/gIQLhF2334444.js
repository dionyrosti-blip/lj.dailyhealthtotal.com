
      (function() {
        try {
          const atomiStaticPageMeta = {"pageId":"k4l8Iz6ywBzK8Jxs5rBH","pageName":"Lipo Jelly VSL","pageDomain":null};
          const ATOMI_PLATFORM_NOTIFY_URL = "https://apido.atomicat-api.com/platform/notify/s/fe";

          function atomiSerializeError(error) {
            try {
              if (!error) return { message: "Unknown error" };
              if (typeof error === "string") return { message: error };
              if (error instanceof Error) {
                return {
                  name: error.name,
                  message: error.message,
                  stack: error.stack,
                };
              }
              return {
                message: error?.message || "Non-Error exception",
                raw: JSON.stringify(error),
              };
            } catch (serializationError) {
              return {
                message: "Failed to serialize error",
                serializationError: serializationError?.message,
              };
            }
          }

          function atomiReportError(error, extra = {}) {
            try {
              const payload = {
                domain: window?.location?.hostname || atomiStaticPageMeta?.pageDomain || "",
                pageUrl: window?.location?.href || "",
                pagePath: window?.location?.pathname || "",
                referrer: document?.referrer || "",
                userAgent: navigator?.userAgent || "",
                language: navigator?.language || "",
                viewport: {
                  width: window?.innerWidth,
                  height: window?.innerHeight,
                },
                timestamp: new Date().toISOString(),
                pageMeta: atomiStaticPageMeta,
                error: atomiSerializeError(error),
                extra,
              };

              const payloadString = JSON.stringify(payload);
              if (navigator?.sendBeacon) {
                const blob = new Blob([payloadString], { type: "text/plain;charset=UTF-8" });
                navigator.sendBeacon(ATOMI_PLATFORM_NOTIFY_URL, blob);
                return;
              }

              fetch(ATOMI_PLATFORM_NOTIFY_URL, {
                method: "POST",
                mode: "no-cors",
                keepalive: true,
                headers: {
                  "Content-Type": "text/plain;charset=UTF-8",
                },
                body: payloadString,
              }).catch(() => {});
            } catch (reportingError) {
              console.log(reportingError);
            }
          }

          if (typeof window !== "undefined") {
            window.atomiReportError = atomiReportError;
          }
        } catch (error) {
          console.log(error);
        }
      })();
    
      function atomiNormalizeRevealEntries(items) {
        if (!items || !items.length) return [];
        const def = 100;
        return items.map(function (entry) {
          if (typeof entry === "string") {
            var s = entry.trim();
            return s ? { value: s, showAtPercent: def } : null;
          }
          if (entry && typeof entry === "object") {
            var v = entry.value != null ? entry.value : (entry.id != null ? entry.id : entry.className);
            v = v != null ? String(v).trim() : "";
            if (!v) return null;
            var p = entry.showAtPercent != null ? Number(entry.showAtPercent) : def;
            if (isNaN(p)) p = def;
            p = Math.max(0, Math.min(100, p));
            return { value: v, showAtPercent: p };
          }
          return null;
        }).filter(Boolean);
      }
      function atomiShowItems({items}) {
      try {
        (items || []).forEach((item) => {
          const key = typeof item === "string" ? item : (item && (item.value != null ? item.value : (item.id != null ? item.id : item.className)));
          if (key == null || key === "") return;
          const token = String(key).trim();
          if (!token) return;
          const hiddenItem = [...document.querySelectorAll(`#${token}`), ...document.querySelectorAll(`.${token}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      function atomiGetVturbSrc() {
        try {
          var src = "";

          try {
            var pageUrl = new URL(window.location.href);
            src = pageUrl.searchParams.get("src") || "";
            if (src) return location.search != "" ? "&src=" + src : "?src=" + src;
          } catch (e) {
            console.log(e);
          }

          try {
            var links = document.querySelectorAll('a[href*="src="]');
            for (var i = 0; i < links.length; i++) {
              try {
                var u = new URL(links[i].href);
                var s = u.searchParams.get("src");
                if (s) return location.search != "" ? "&src=" + s : "?src=" + s;
              } catch (e2) {
                console.log(e2);
              }
            }
          } catch (e1) {
            console.log(e1);
          }

          return "";
        } catch (error) {
          console.log(error);
        }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"aea4fe8","misc":{"type":"text"}},{"compKey":"67d0818","misc":{"type":"text"}},{"compKey":"a78e0f8","misc":{"type":"text"}},{"compKey":"fea9e86","misc":{"type":"text"}},{"compKey":"67ac0ce","misc":{"type":"text"}},{"compKey":"a8fe63d","misc":{"type":"text"}},{"compKey":"87f4dd3","misc":{"type":"text"}},{"compKey":"a3b64f2","misc":{"type":"text"}},{"compKey":"204a940","misc":{"type":"text"}},{"compKey":"9ad8332","misc":{"type":"button"}},{"compKey":"e5e16c4","misc":{"type":"image"}},{"compKey":"a0a165b","misc":{"type":"image"}},{"compKey":"9dca468","misc":{"type":"image"}},{"compKey":"d566354","misc":{"type":"image"}},{"compKey":"59fa432","misc":{"type":"image"}},{"compKey":"ecf069c","misc":{"type":"image"}},{"compKey":"f7c96be","misc":{"type":"image"}},{"compKey":"0273b88","misc":{"type":"button"}},{"compKey":"c6aef14","misc":{"type":"text"}},{"compKey":"46a5527","misc":{"type":"text"}},{"compKey":"9f8b635","misc":{"type":"text"}},{"compKey":"bf027fd","misc":{"type":"text"}},{"compKey":"03ed6cb","misc":{"type":"text"}},{"compKey":"64c4e2c","misc":{"type":"text"}},{"compKey":"208460a","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "6a95f093aa727d62256062d8";
              var compKey = "3a2cd18";
              const twr = false;
              var SECONDS_TO_DISPLAY = 2328;
              var attempts = 0;
              var elsDisplayed = false;
              var isWatchingSmartplayer = false;
              var isWatchingVturbV2 = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed2328';
              var alreadyElsDisplayed = localStorage?.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              function getVideoInstance() {
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  return null;
                }
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              function getVturbSmartPlayerElement() {
                var componentContainer = document.querySelector('.a-video-' + compKey);
                if (componentContainer) {
                  var scopedPlayer = componentContainer.querySelector('vturb-smartplayer');
                  if (scopedPlayer) {
                    return scopedPlayer;
                  }
                }
                if (vturbvideoId && vturbvideoId !== 'null') {
                  return (
                    document.querySelector('vturb-smartplayer#vid-' + vturbvideoId)
                  );
                }
                return document.querySelector('vturb-smartplayer');
              }
              function getTimeFromEvent(ev) {
                if (typeof ev?.detail?.time === 'number') return ev.detail.time;
                if (typeof ev?.detail?.currentTime === 'number') return ev.detail.currentTime;
                if (typeof ev?.detail === 'number') return ev.detail;
                return null;
              }
              function handleVturbV2TimeUpdate(ev, playerRef) {
                if (elsDisplayed) return;
                var isSmartAutoPlay = !!(
                  ev?.detail?.config?.smartAutoPlay?.active ||
                  ev?.detail?.smartAutoPlay?.active ||
                  ev?.detail?.smartAutoPlay ||
                  playerRef?.config?.smartAutoPlay?.active ||
                  playerRef?.smartAutoPlay?.active ||
                  playerRef?.smartAutoPlay
                );
                if (isSmartAutoPlay) return;
                var currentTime = getTimeFromEvent(ev);
                if (typeof currentTime !== 'number') return;
                console.log('vturb v2 currentTime => ' + currentTime + ' SECONDS_TO_DISPLAY => ' + SECONDS_TO_DISPLAY);
                if (currentTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
              }
              function startWatchVideoProgressV2(vturbPlayerElement) {
                if (!vturbPlayerElement || isWatchingVturbV2) return false;
                isWatchingVturbV2 = true;
                vturbPlayerElement.addEventListener('video:timeupdate', function (ev) {
                  handleVturbV2TimeUpdate(ev, vturbPlayerElement);
                });
                vturbPlayerElement.addEventListener('player:ready', function (e) {
                  var playerEl = e?.detail?.player;
                  if (!playerEl) return;
                  playerEl.addEventListener('video:timeupdate', function (ev) {
                    handleVturbV2TimeUpdate(ev, playerEl);
                  });
                });
                return true;
              }
              window.startWatchVideoProgress = function startWatchVideoProgress(reAttempts) {
                if (reAttempts) {
                  attempts = reAttempts;
                }
                
                console.log("vturbvideoId", vturbvideoId);
                var hasSmartplayerInstances = typeof smartplayer !== 'undefined' && smartplayer.instances && smartplayer.instances.length;
                var hasV2PlayerElement = !!getVturbSmartPlayerElement();
                if (!hasSmartplayerInstances && !hasV2PlayerElement) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                if (hasSmartplayerInstances) {
                  console.log(smartplayer.instances);
                }
                var videoInstance = getVideoInstance();
                console.log("videoInstance", videoInstance, vturbvideoId);
                if (videoInstance?.analytics?.player?.options?.id && videoInstance?.analytics?.player?.options?.id !== vturbvideoId && attempts <= 10 && !hasV2PlayerElement) {
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                if (videoInstance && typeof videoInstance.on === 'function' && !isWatchingSmartplayer) {
                  isWatchingSmartplayer = true;
                  videoInstance.on('timeupdate', () => {
                    if (elsDisplayed || videoInstance.smartAutoPlay) return;
                    console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                    if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                    showHiddenElements();
                  });
                  return;
                }
                if (!videoInstance) {
                  var vturbPlayerElement = getVturbSmartPlayerElement();
                  if (startWatchVideoProgressV2(vturbPlayerElement)) {
                    return;
                  }
                }
                if (attempts <= 10 && !isWatchingSmartplayer && !isWatchingVturbV2) {
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                window.startWatchVideoProgress();
              }
            } catch (error) {
              console.log(error);
              if (!error.stack?.includes("SecurityError") && !error.message?.includes("SecurityError")) {
                window.atomiReportError?.(error, { source: "vturb-videojs" });
              }
            }
            
          })();
        
  (function() {
    try {
      const digitsClass = "a-cd-d";
      const list = [{"compKey":"213ef80d-08a0-45e0-9013-0c02f3160405","misc":{"type":"countdown","countdownType":"evergreen","dateTime":"10:00","hideLabel":true,"labelTag":"span","separator":{"active":false,"type":"atomicat-countdown-separator-dotted"},"items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutes","show":true},{"text":"Seconds","show":false}],"boundingBox":{"desktop":{"top":1179.1,"left":1343.05,"width":153.35,"height":105.6,"timestamp":1787055184820},"mobile":{"top":1195.15,"left":112,"width":60.8,"height":105.6,"timestamp":1787055184930}}},"style":{"countdown":{"gap":{"desktop":"0px"},"container":{"paddingTop":{"desktop":"0px"},"paddingRight":{"desktop":"0px"},"paddingBottom":{"desktop":"0px"},"paddingLeft":{"desktop":"0px"},"background":{"desktop":"rgba(0,0,0,0)"}},"digits":{"color":"#FFDC17","fontFamily":"Montserrat","fontSize":{"desktop":"54px"},"fontWeight":{"desktop":"700"}},"label":{"color":"#FFDC17"},"maxWidth":{"mobile":"100%"}},"topCont":{"alignSelf":{"desktop":"center"}},"outer":{"width":{"mobile":"20%"}}}},{"compKey":"68712670-b1c0-4287-ba82-465f15e34502","misc":{"type":"countdown","countdownType":"evergreen","dateTime":"10:00","hideLabel":true,"labelTag":"span","separator":{"active":false,"type":"atomicat-countdown-separator-dotted"},"items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutes","show":false},{"text":"Seconds","show":true}],"boundingBox":{"desktop":{"top":1179.1,"left":1516.4,"width":153.35,"height":105.6,"timestamp":1787055184820},"mobile":{"top":1195.15,"left":233.6,"width":60.8,"height":105.6,"timestamp":1787055184930}}},"style":{"countdown":{"gap":{"desktop":"0px"},"container":{"paddingTop":{"desktop":"0px"},"paddingRight":{"desktop":"0px"},"paddingBottom":{"desktop":"0px"},"paddingLeft":{"desktop":"0px"},"background":{"desktop":"rgba(0,0,0,0)"}},"digits":{"color":"#FFDC17","fontFamily":"Montserrat","fontSize":{"desktop":"54px"},"fontWeight":{"desktop":"700"}},"label":{"color":"#FFDC17"}},"topCont":{"alignSelf":{"desktop":"center"}},"outer":{"width":{"mobile":"20%"}}}},{"compKey":"de373ac5-9580-4350-896d-06a80367afc6","misc":{"type":"countdown","countdownType":"evergreen","dateTime":"10:00","hideLabel":true,"labelTag":"span","separator":{"active":false,"type":"atomicat-countdown-separator-dotted"},"items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutes","show":true},{"text":"Seconds","show":false}],"boundingBox":{"desktop":{"top":3014.88,"left":1343.05,"width":153.35,"height":105.6,"timestamp":1787055184823},"mobile":{"top":4974.43,"left":112,"width":60.8,"height":105.6,"timestamp":1787055184932}}},"style":{"countdown":{"gap":{"desktop":"0px"},"container":{"paddingTop":{"desktop":"0px"},"paddingRight":{"desktop":"0px"},"paddingBottom":{"desktop":"0px"},"paddingLeft":{"desktop":"0px"},"background":{"desktop":"rgba(0,0,0,0)"}},"digits":{"color":"#FFDC17","fontFamily":"Montserrat","fontSize":{"desktop":"54px"},"fontWeight":{"desktop":"700"}},"label":{"color":"#FFDC17"}},"topCont":{"alignSelf":{"desktop":"center"}},"outer":{"width":{"mobile":"20%"}}}},{"compKey":"63b893e8-17fc-4747-9f82-eb3fbe6a0bd7","misc":{"type":"countdown","countdownType":"evergreen","dateTime":"10:00","hideLabel":true,"labelTag":"span","separator":{"active":false,"type":"atomicat-countdown-separator-dotted"},"items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutes","show":false},{"text":"Seconds","show":true}],"boundingBox":{"desktop":{"top":3014.88,"left":1516.4,"width":153.35,"height":105.6,"timestamp":1787055184823},"mobile":{"top":4974.43,"left":233.6,"width":60.8,"height":105.6,"timestamp":1787055184932}}},"style":{"countdown":{"gap":{"desktop":"0px"},"container":{"paddingTop":{"desktop":"0px"},"paddingRight":{"desktop":"0px"},"paddingBottom":{"desktop":"0px"},"paddingLeft":{"desktop":"0px"},"background":{"desktop":"rgba(0,0,0,0)"}},"digits":{"color":"#FFDC17","fontFamily":"Montserrat","fontSize":{"desktop":"54px"},"fontWeight":{"desktop":"700"}},"label":{"color":"#FFDC17"}},"topCont":{"alignSelf":{"desktop":"center"}},"outer":{"width":{"mobile":"20%"}}}}];
      const pad = (n) => String(n).padStart(2, "0");
      list.forEach((c) => {
        const key = c?.compKey?.slice(0, 7);
        const m = c?.misc || {};
        const type = m.countdownType;
        const dateTime = m.dateTime;
        const intervalKey = "atomicat_countdown_interval_" + key;
        const el = document.querySelector(".atomicat-countdown-" + key);
        if (!el) return;
        const daysEl = el.querySelector(".atomicat-countdown-days");
        const hoursEl = el.querySelector(".atomicat-countdown-hours");
        const minutesEl = el.querySelector(".atomicat-countdown-minutes");
        const secondsEl = el.querySelector(".atomicat-countdown-seconds");
        window[intervalKey] = setInterval(() => {
          if (el.closest(".atomicat-delay") || el.closest(".atomicat-hidden")) return;
          let target;
          if (type === "evergreen") {
            const sk = "atomicat_countdown_start_" + key;
            let start = sessionStorage.getItem(sk);
            if (!start) { start = Date.now(); sessionStorage.setItem(sk, start); }
            const [h, min] = (dateTime || "0:0").split(":").map(Number);
            target = new Date(+start);
            target.setHours(target.getHours() + (h || 0));
            target.setMinutes(target.getMinutes() + (min || 0));
          } else {
            target = new Date(dateTime || 0);
          }
          const dist = target - Date.now();
          if (dist <= 0) {
            clearInterval(window[intervalKey]);
            el.querySelectorAll("." + digitsClass).forEach((d) => d.textContent = "00");
            return;
          }
          const d = Math.floor(dist / 864e5);
          const h = Math.floor((dist % 864e5) / 36e5);
          const min = Math.floor((dist % 36e5) / 6e4);
          const s = Math.floor((dist % 6e4) / 1e3);
          if (daysEl) daysEl.textContent = pad(d);
          if (hoursEl) hoursEl.textContent = pad(h);
          if (minutesEl) minutesEl.textContent = pad(min);
          if (secondsEl) secondsEl.textContent = pad(s);
        }, 1000);
      });
    } catch (e) {}
  })();