
(function(){
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;

  /* ---------- Hero headline: split into words ---------- */
  var heroTitle = document.getElementById('heroTitle');
  var text = window.HERO_HTML || 'We build apps<br><span class="hl">that actually work</span><br>in the real world.';
  (function buildWords(){
    var container = document.createElement('span');
    container.innerHTML = text;
    var frag = document.createDocumentFragment();
    var delay = 0;
    Array.prototype.forEach.call(container.childNodes, function(node){
      if(node.nodeType === 1 && node.tagName === 'BR'){
        frag.appendChild(document.createElement('br'));
        return;
      }
      var isHl = node.nodeType === 1 && node.classList && node.classList.contains('hl');
      var words = (node.textContent || '').trim().split(/\s+/).filter(Boolean);
      words.forEach(function(w){
        var wrap = document.createElement('span');
        wrap.className = 'word';
        var inner = document.createElement('span');
        inner.textContent = w;
        if(isHl) inner.classList.add('hl');
        inner.style.animationDelay = (0.15 + delay*0.06) + 's';
        delay++;
        wrap.appendChild(inner);
        frag.appendChild(wrap);
        frag.appendChild(document.createTextNode(' '));
      });
    });
    heroTitle.appendChild(frag);
  })();

  /* ================= INTRO LOADER (once per browser session) ================= */
  (function(){
    var loader = document.getElementById('loader');
    var fill = document.getElementById('loaderFill');
    var pct = document.getElementById('loaderPct');
    var alreadyPlayed = false;
    try{ alreadyPlayed = sessionStorage.getItem('nx-loaded') === '1'; }catch(e){}

    if(reduceMotion || alreadyPlayed){
      body.classList.remove('locked');
      body.classList.add('ready');
      loader.style.display = 'none';
      try{ sessionStorage.setItem('nx-loaded', '1'); }catch(e){}
      return;
    }
    var progress = 0;
    var duration = 1500;
    var start = null;
    function step(ts){
      if(!start) start = ts;
      var elapsed = ts - start;
      var t = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - t, 2);
      progress = Math.round(eased * 100);
      fill.style.width = progress + '%';
      pct.textContent = progress + '%';
      if(t < 1){
        requestAnimationFrame(step);
      } else {
        setTimeout(finish, 220);
      }
    }
    function finish(){
      loader.classList.add('loader--exit');
      body.classList.remove('locked');
      body.classList.add('ready');
      try{ sessionStorage.setItem('nx-loaded', '1'); }catch(e){}
      setTimeout(function(){ loader.style.display = 'none'; }, 1050);
    }
    requestAnimationFrame(step);
  })();

  /* ---------- Scroll progress bar ---------- */
  var progressBar = document.getElementById('scrollProgress');
  function updateProgress(){
    var h = document.documentElement;
    var scrollTop = h.scrollTop || document.body.scrollTop;
    var scrollHeight = h.scrollHeight - h.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, {passive:true});

  /* ---------- Cursor glow + dot + ring ---------- */
  var glow = document.getElementById('cursorGlow');
  var ring = document.getElementById('cursorRing');
  var dot = document.getElementById('cursorDot');
  var hasFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(!reduceMotion && hasFinePointer){
    var ringX = 0, ringY = 0, mx = 0, my = 0;
    document.addEventListener('mousemove', function(e){
      body.classList.add('has-mouse');
      mx = e.clientX; my = e.clientY;
      glow.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      var target = e.target;
      var interactive = target.closest && target.closest('a,button,.chip,.gallery-dots button,.gallery-frame,.lightbox-nav,.theme-toggle');
      body.classList.toggle('cursor-active', !!interactive);
    }, {passive:true});
    function ringLoop(){
      ringX += (mx - ringX) * 0.18;
      ringY += (my - ringY) * 0.18;
      ring.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px) translate(-50%,-50%)';
      requestAnimationFrame(ringLoop);
    }
    ringLoop();
  }

  /* ---------- Aurora parallax on mouse ---------- */
  if(!reduceMotion){
    var auroras = document.querySelectorAll('.aurora span');
    window.addEventListener('mousemove', function(e){
      var nx = (e.clientX / window.innerWidth - 0.5);
      var ny = (e.clientY / window.innerHeight - 0.5);
      auroras.forEach(function(span, i){
        var depth = (i % 3 + 1) * 10;
        span.style.marginLeft = (nx * depth) + 'px';
        span.style.marginTop = (ny * depth) + 'px';
      });
    }, {passive:true});
  }

  /* ---------- Neural network training simulation (2D canvas) ---------- */
  (function initNetwork(){
    var canvas = document.getElementById('particleCanvas');
    if(reduceMotion || !canvas) return;
    var ctx = canvas.getContext('2d');
    if(!ctx) return;
    var readoutEl = document.getElementById('nnReadout');

    var w, h, dpr, layers = [], connections = [];
    var mouse = {x:null, y:null, active:false};
    var ORANGE = '249,115,22';
    var ORANGE_DEEP = '234,88,12';

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function layerCounts(){
      if(w < 700) return [3,5,5,3];
      if(w < 1100) return [4,6,6,4];
      return [4,7,8,6,3];
    }

    function buildNetwork(){
      layers = [];
      connections = [];
      var counts = layerCounts();
      var padX = w * 0.08, padY = h * 0.12;
      var innerW = w - padX * 2, innerH = h - padY * 2;

      counts.forEach(function(count, li){
        var col = [];
        var lx = counts.length > 1 ? padX + (innerW * li) / (counts.length - 1) : w / 2;
        for(var j = 0; j < count; j++){
          var ly = count > 1 ? padY + (innerH * j) / (count - 1) : h / 2;
          var isOutput = li === counts.length - 1;
          var isHexStyled = isOutput || Math.random() < 0.16;
          col.push({
            slotX: lx, slotY: ly,
            offX: 0, offY: 0,
            velX: 0, velY: 0,
            x: lx, y: ly,
            r: isHexStyled ? (6.5 + Math.random()*2.5) : (2.6 + Math.random()*1.8),
            big: isHexStyled,
            activation: 0.15,
            firedForward: false,
            firedBackward: false,
            swimAmp: 4 + Math.random() * 5,
            swimSpeedX: 0.06 + Math.random() * 0.08,
            swimSpeedY: 0.05 + Math.random() * 0.07,
            swimPhaseX: Math.random() * Math.PI * 2,
            swimPhaseY: Math.random() * Math.PI * 2,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.04,
            outgoing: [],
            incoming: []
          });
        }
        layers.push(col);
      });

      for(var li2 = 0; li2 < layers.length - 1; li2++){
        layers[li2].forEach(function(a){
          layers[li2+1].forEach(function(b){
            if(Math.random() < 0.82){
              var conn = {from:a, to:b, weight: (Math.random() * 2 - 1) * 0.85};
              connections.push(conn);
              a.outgoing.push(conn);
              b.incoming.push(conn);
            }
          });
        });
      }
    }

    resize();
    buildNetwork();
    window.addEventListener('resize', function(){ resize(); buildNetwork(); });

    window.addEventListener('mousemove', function(e){
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= -50 && mouse.x <= w + 50 && mouse.y >= -50 && mouse.y <= h + 50;
    }, {passive:true});
    document.addEventListener('mouseleave', function(){ mouse.active = false; });

    function drawHexNode(x, y, r, alpha, rot){
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot || 0);
      ctx.beginPath();
      for(var i = 0; i < 6; i++){
        var ang = (Math.PI / 3) * i - Math.PI / 2;
        var px = Math.cos(ang) * r, py = Math.sin(ang) * r;
        if(i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(' + ORANGE + ',' + (0.9 * alpha) + ')';
      ctx.lineWidth = 1.4;
      ctx.stroke();
      var grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.55);
      grad.addColorStop(0, 'rgba(' + ORANGE + ',' + alpha + ')');
      grad.addColorStop(1, 'rgba(' + ORANGE_DEEP + ',' + (alpha * 0.15) + ')');
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    var visible = true;
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){ visible = entry.isIntersecting; });
      }, {threshold:0});
      io.observe(canvas);
    }

    /* ---- training state machine: forward pass -> backward pass -> weight update -> repeat ---- */
    var pulses = [];
    var phase = 'forward', phaseTimer = 0;
    var FWD_DURATION = 5200, BWD_DURATION = 5200, PAUSE_DURATION = 2200;
    var epoch = 0, loss = 1.15 + Math.random() * 0.35;

    function pad3(n){ return (n < 10 ? '00' : n < 100 ? '0' : '') + n; }
    function updateReadout(){
      if(readoutEl) readoutEl.textContent = 'epoch ' + pad3(epoch) + ' \u00b7 loss ' + loss.toFixed(4);
    }
    updateReadout();

    function spawnForward(node){
      node.outgoing.forEach(function(conn){
        if(pulses.length > 140) return;
        pulses.push({conn:conn, dir:'f', t:0, duration: 2000 + Math.random()*900, trail:[]});
      });
    }
    function spawnBackward(node){
      node.incoming.forEach(function(conn){
        if(pulses.length > 140) return;
        pulses.push({conn:conn, dir:'b', t:0, duration: 2000 + Math.random()*900, trail:[]});
      });
    }
    function nudgeWeight(conn){
      conn.weight += (Math.random() - 0.5) * 0.09;
      if(conn.weight > 1) conn.weight = 1;
      if(conn.weight < -1) conn.weight = -1;
    }

    function startForwardPhase(){
      phase = 'forward'; phaseTimer = 0;
      layers.forEach(function(col){ col.forEach(function(n){ n.firedForward = false; n.firedBackward = false; }); });
      if(layers.length){
        layers[0].forEach(function(n){
          n.firedForward = true;
          n.activation = 1;
          spawnForward(n);
        });
      }
    }
    function startBackwardPhase(){
      phase = 'backward'; phaseTimer = 0;
      var last = layers[layers.length - 1];
      if(last){
        last.forEach(function(n){
          n.firedBackward = true;
          n.activation = Math.max(n.activation, 0.9);
          spawnBackward(n);
        });
      }
    }
    function finishCycle(){
      phase = 'pause'; phaseTimer = 0;
      epoch++;
      loss = Math.max(0.012, loss * (0.94 + Math.random() * 0.05));
      if(Math.random() < 0.14) loss += Math.random() * 0.018;
      updateReadout();
    }

    var lastTs = null;
    startForwardPhase();

    function tick(ts){
      requestAnimationFrame(tick);
      if(!visible) return;
      if(!lastTs) lastTs = ts;
      var dt = Math.min(ts - lastTs, 50);
      lastTs = ts;
      var t = ts / 1000;

      var isLight = document.documentElement.getAttribute('data-theme') === 'light';
      var CREAM = isLight ? '17,17,20' : '242,239,233';
      var SLATE = isLight ? '148,148,158' : '134,163,201';

      phaseTimer += dt;
      if(phase === 'forward' && phaseTimer > FWD_DURATION) startBackwardPhase();
      else if(phase === 'backward' && phaseTimer > BWD_DURATION) finishCycle();
      else if(phase === 'pause' && phaseTimer > PAUSE_DURATION) startForwardPhase();

      ctx.clearRect(0, 0, w, h);

      /* node physics: spring back to slot + mouse repulsion + gentle swim */
      layers.forEach(function(col){
        col.forEach(function(n){
          var ax = -n.offX * 0.01, ay = -n.offY * 0.01;
          if(mouse.active){
            var dx = (n.slotX + n.offX) - mouse.x, dy = (n.slotY + n.offY) - mouse.y;
            var d = Math.sqrt(dx*dx + dy*dy);
            if(d < 130 && d > 0.01){
              var f = (130 - d) / 130 * 0.3;
              ax += (dx/d) * f; ay += (dy/d) * f;
            }
          }
          n.velX = (n.velX + ax) * 0.955;
          n.velY = (n.velY + ay) * 0.955;
          n.offX += n.velX; n.offY += n.velY;
          n.rot += n.rotSpeed * 0.01;
          n.activation *= 0.985;

          n.x = n.slotX + n.offX + Math.sin(t * n.swimSpeedX + n.swimPhaseX) * n.swimAmp;
          n.y = n.slotY + n.offY + Math.cos(t * n.swimSpeedY + n.swimPhaseY) * n.swimAmp;
        });
      });

      /* connections: line weight + color encode sign/magnitude, drawn faint like distant starlight */
      connections.forEach(function(conn){
        var absW = Math.abs(conn.weight);
        var alpha = 0.05 + absW * 0.28;
        var col = conn.weight >= 0 ? ORANGE : SLATE;
        ctx.strokeStyle = 'rgba(' + col + ',' + alpha + ')';
        ctx.lineWidth = 0.5 + absW * 1.1;
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();
      });

      /* traveling pulses: forward (bright/orange) vs backward (cool/slate), drifting like glowing atoms with a soft fading trail */
      pulses = pulses.filter(function(p){ return p.t < 1; });
      pulses.forEach(function(p){
        p.t += dt / p.duration;
        var e = p.t < 1 ? p.t : 1;
        var ease = e < 0.5 ? 2*e*e : 1 - Math.pow(-2*e+2, 2)/2;
        var sx = p.dir === 'f' ? p.conn.from.x : p.conn.to.x;
        var sy = p.dir === 'f' ? p.conn.from.y : p.conn.to.y;
        var ex = p.dir === 'f' ? p.conn.to.x : p.conn.from.x;
        var ey = p.dir === 'f' ? p.conn.to.y : p.conn.from.y;
        var px = sx + (ex - sx) * ease;
        var py = sy + (ey - sy) * ease;
        var rad = p.dir === 'f' ? 7 : 5.5;

        if(!p.trail) p.trail = [];
        p.trail.push({x:px, y:py});
        if(p.trail.length > 9) p.trail.shift();

        var baseCol = p.dir === 'f' ? ORANGE : SLATE;
        p.trail.forEach(function(pt, idx){
          var tAlpha = ((idx + 1) / p.trail.length) * 0.4;
          var tRad = rad * (0.35 + (idx / p.trail.length) * 0.65);
          var tg = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, tRad);
          tg.addColorStop(0, 'rgba(' + baseCol + ',' + tAlpha + ')');
          tg.addColorStop(1, 'rgba(' + baseCol + ',0)');
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, tRad, 0, Math.PI * 2);
          ctx.fillStyle = tg;
          ctx.fill();
        });

        var glow = ctx.createRadialGradient(px, py, 0, px, py, rad);
        if(p.dir === 'f'){
          glow.addColorStop(0, 'rgba(' + CREAM + ',0.9)');
          glow.addColorStop(0.4, 'rgba(' + ORANGE + ',0.65)');
          glow.addColorStop(1, 'rgba(' + ORANGE + ',0)');
        } else {
          glow.addColorStop(0, 'rgba(' + CREAM + ',0.65)');
          glow.addColorStop(0.4, 'rgba(' + SLATE + ',0.5)');
          glow.addColorStop(1, 'rgba(' + SLATE + ',0)');
        }
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        if(p.t >= 1){
          if(p.dir === 'f'){
            var target = p.conn.to;
            target.activation = 1;
            if(!target.firedForward){
              target.firedForward = true;
              if(target.outgoing.length) spawnForward(target);
            }
          } else {
            nudgeWeight(p.conn);
            var src = p.conn.from;
            src.activation = Math.max(src.activation, 0.85);
            if(!src.firedBackward){
              src.firedBackward = true;
              if(src.incoming.length) spawnBackward(src);
            }
          }
        }
      });

      /* nodes: glow intensity reflects live activation, like distant stars breathing */
      layers.forEach(function(col){
        col.forEach(function(n){
          var glowAlpha = Math.min(1, 0.32 + n.activation * 0.62);
          if(n.big){
            drawHexNode(n.x, n.y, n.r, glowAlpha, n.rot);
          } else {
            var haloGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.6);
            haloGrad.addColorStop(0, 'rgba(' + ORANGE + ',' + (glowAlpha * 0.5) + ')');
            haloGrad.addColorStop(1, 'rgba(' + ORANGE + ',0)');
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r * 2.6, 0, Math.PI * 2);
            ctx.fillStyle = haloGrad;
            ctx.fill();

            var coreGrad = ctx.createLinearGradient(n.x - n.r, n.y - n.r, n.x + n.r, n.y + n.r);
            coreGrad.addColorStop(0, 'rgba(' + ORANGE + ',1)');
            coreGrad.addColorStop(1, 'rgba(' + ORANGE_DEEP + ',1)');
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();
          }
        });
      });
    }
    requestAnimationFrame(tick);
  })();

  /* ---------- Magnetic buttons ---------- */
  if(!reduceMotion && hasFinePointer){
    document.querySelectorAll('.magnetic').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width/2;
        var y = e.clientY - r.top - r.height/2;
        btn.style.transform = 'translate(' + (x*0.25) + 'px,' + (y*0.4) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){
        btn.style.transform = 'translate(0,0)';
      });
    });
  }

  /* ---------- Tilt on stokko card ---------- */
  if(!reduceMotion && hasFinePointer){
    document.querySelectorAll('.tilt-card').forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'rotateX(' + (py * -2.2) + 'deg) rotateY(' + (px * 2.6) + 'deg) translateY(-2px)';
      });
      card.addEventListener('mouseleave', function(){
        card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  /* ---------- Scroll-tied parallax ---------- */
  if(!reduceMotion){
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    function updateParallax(){
      var vh = window.innerHeight;
      parallaxEls.forEach(function(el){
        var factor = parseFloat(el.getAttribute('data-parallax')) || 0;
        var r = el.getBoundingClientRect();
        var center = r.top + r.height/2;
        var offset = (center - vh/2) * factor;
        el.style.transform = 'translateY(' + (-offset) + 'px)';
      });
      requestAnimationFrame(updateParallax);
    }
    requestAnimationFrame(updateParallax);
  }

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll('.reveal, .stagger');
  if('IntersectionObserver' in window){
    var ro = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          ro.unobserve(entry.target);
        }
      });
    }, {threshold:.15});
    revealTargets.forEach(function(t){ ro.observe(t); });
  } else {
    revealTargets.forEach(function(t){ t.classList.add('is-visible'); });
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll('.num[data-count]');
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var isDecimal = target % 1 !== 0;
    var duration = 1400;
    var startTime = null;
    function step(ts){
      if(!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
      if(progress < 1) requestAnimationFrame(step);
      else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(step);
  }
  if(counters.length && 'IntersectionObserver' in window){
    var co = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, {threshold:.5});
    counters.forEach(function(c){ co.observe(c); });
  }

  /* ---------- Nav background on scroll ---------- */
  var nav = document.getElementById('siteNav');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, {passive:true});

  /* ---------- Scrollspy ---------- */
  var spyButtons = Array.prototype.slice.call(document.querySelectorAll('.scrollspy button'));
  var sections = spyButtons.map(function(btn){ return document.querySelector(btn.getAttribute('data-target')); }).filter(Boolean);
  spyButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = document.querySelector(btn.getAttribute('data-target'));
      if(target) target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
    });
  });
  if('IntersectionObserver' in window && sections.length){
    var spyObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var id = '#' + entry.target.id;
          spyButtons.forEach(function(btn){
            btn.classList.toggle('active', btn.getAttribute('data-target') === id);
          });
        }
      });
    }, {threshold:.5});
    sections.forEach(function(s){ spyObserver.observe(s); });
  }

  /* ---------- Click sound (synthesized, no external file) ---------- */
  var soundOn = localStorage.getItem('nx-sound') !== 'off';
  var soundToggle = document.getElementById('soundToggle');
  function renderSoundIcon(){
    soundToggle.style.opacity = soundOn ? '1' : '.45';
  }
  renderSoundIcon();
  var audioCtx = null;
  function playTick(){
    if(!soundOn) return;
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(720, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(420, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.09);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    }catch(e){}
  }
  document.querySelectorAll('.btn, .chip, .gallery-dots button, .scrollspy button, .gallery-frame, .lightbox-nav, .theme-toggle').forEach(function(el){
    el.addEventListener('click', playTick);
  });
  soundToggle.addEventListener('click', function(){
    soundOn = !soundOn;
    localStorage.setItem('nx-sound', soundOn ? 'on' : 'off');
    renderSoundIcon();
    if(soundOn) playTick();
  });

  /* ---------- Theme toggle (dark/light) ---------- */
  var themeToggle = document.getElementById('themeToggle');
  if(themeToggle){
    themeToggle.addEventListener('click', function(){
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try{ localStorage.setItem('nx-theme', next); }catch(e){}
    });
  }

  /* ---------- Scramble text hover effect ---------- */
  var SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  document.querySelectorAll('.scramble').forEach(function(el){
    var original = el.textContent;
    var running = false;
    el.addEventListener('mouseenter', function(){
      if(running || reduceMotion) return;
      running = true;
      var frame = 0;
      var totalFrames = 10;
      var interval = setInterval(function(){
        el.textContent = original.split('').map(function(ch, i){
          if(ch === ' ') return ' ';
          if(i < (frame / totalFrames) * original.length) return original[i];
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join('');
        frame++;
        if(frame > totalFrames){
          clearInterval(interval);
          el.textContent = original;
          running = false;
        }
      }, 35);
    });
  });

  /* ---------- Swipeable gallery + Lightbox ---------- */
  var frame = document.querySelector('.gallery-frame');
  var track = document.getElementById('galleryTrack');
  if(frame && track){
    var dots = Array.prototype.slice.call(document.querySelectorAll('.gallery-dots button'));
    var imgs = Array.prototype.slice.call(track.querySelectorAll('img'));
    var currentIdx = 0, isDragging = false, isClick = true, startX = 0, currTrans = 0, prevTrans = 0, timer = null;

    function render(animate){
      if(animate === false) track.classList.add('is-dragging'); else track.classList.remove('is-dragging');
      currTrans = -currentIdx * frame.offsetWidth;
      track.style.transform = 'translateX(' + currTrans + 'px)';
      dots.forEach(function(d, i){ d.classList.toggle('is-active', i === currentIdx); });
    }

    function ds(e){
      isDragging = true; isClick = true; stopAuto();
      startX = e.type === 'touchstart' ? e.touches[0].clientX : e.pageX;
      prevTrans = currTrans; e.preventDefault();
    }
    function dm(e){
      if(!isDragging) return;
      var x = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX; var diff = x - startX;
      if(Math.abs(diff) > 5) isClick = false;
      track.classList.add('is-dragging');
      if((currentIdx === 0 && diff > 0) || (currentIdx === dots.length - 1 && diff < 0)) diff *= 0.3;
      track.style.transform = 'translateX(' + (prevTrans + diff) + 'px)';
    }
    function de(e){
      if(!isDragging) return; isDragging = false;
      var x = e.type === 'touchend' ? (e.changedTouches ? e.changedTouches[0].clientX : startX) : e.pageX;
      var diff = x - startX;
      if(!isClick && Math.abs(diff) > 40){
        if(diff < 0 && currentIdx < dots.length - 1) currentIdx++;
        else if(diff > 0 && currentIdx > 0) currentIdx--;
      }
      if(isClick) openLightbox();
      render(true); startAuto();
    }
    function dl(){ if(isDragging){ isDragging = false; render(true); startAuto(); } }

    frame.addEventListener('mousedown', ds);
    window.addEventListener('mousemove', dm);
    window.addEventListener('mouseup', de);
    frame.addEventListener('mouseleave', dl);
    frame.addEventListener('touchstart', ds, {passive:false});
    window.addEventListener('touchmove', dm, {passive:true});
    window.addEventListener('touchend', de);

    dots.forEach(function(dot){
      dot.addEventListener('click', function(e){
        e.stopPropagation();
        currentIdx = parseInt(dot.getAttribute('data-index'), 10);
        render(true); startAuto();
      });
    });

    function startAuto(){ stopAuto(); if(!reduceMotion) timer = setInterval(function(){ currentIdx = (currentIdx + 1) % dots.length; render(true); }, 3800); }
    function stopAuto(){ clearInterval(timer); }
    window.addEventListener('resize', function(){ render(false); });

    if('IntersectionObserver' in window){
      var io2 = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){ startAuto(); io2.unobserve(entry.target); }
        });
      }, {threshold:.4});
      io2.observe(frame);
    } else { startAuto(); }

    /* Lightbox (only present on pages that also have the gallery) */
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightboxImg');
    var lbPrev = document.getElementById('lbPrev');
    var lbNext = document.getElementById('lbNext');
    var lbIsDragging = false, lbStartX = 0;

    function updateLightboxImg(){
      lbImg.style.opacity = '0'; lbImg.style.transform = 'scale(0.95) translateX(0)';
      setTimeout(function(){
        lbImg.src = imgs[currentIdx].src; lbImg.style.opacity = '1'; lbImg.style.transform = 'scale(1) translateX(0)';
      }, 150);
      render(false);
    }
    function openLightbox(){
      if(!lightbox) return;
      lbImg.src = imgs[currentIdx].src; lightbox.classList.add('is-open'); stopAuto();
    }

    if(lightbox){
      lbPrev.addEventListener('click', function(e){ e.stopPropagation(); currentIdx = (currentIdx - 1 + dots.length) % dots.length; updateLightboxImg(); });
      lbNext.addEventListener('click', function(e){ e.stopPropagation(); currentIdx = (currentIdx + 1) % dots.length; updateLightboxImg(); });

      var lbDs = function(e){
        if(!lightbox.classList.contains('is-open')) return;
        lbIsDragging = true; lbStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.pageX; e.preventDefault();
      };
      var lbDm = function(e){
        if(!lbIsDragging) return;
        var x = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX; var diff = x - lbStartX;
        lbImg.style.transform = 'scale(1) translateX(' + diff + 'px)';
      };
      var lbDe = function(e){
        if(!lbIsDragging) return; lbIsDragging = false;
        var x = e.type === 'touchend' ? (e.changedTouches ? e.changedTouches[0].clientX : lbStartX) : e.pageX;
        var diff = x - lbStartX;
        if(diff < -50){ currentIdx = (currentIdx + 1) % dots.length; updateLightboxImg(); }
        else if(diff > 50){ currentIdx = (currentIdx - 1 + dots.length) % dots.length; updateLightboxImg(); }
        else { lbImg.style.transform = 'scale(1) translateX(0)'; }
      };

      lbImg.addEventListener('mousedown', lbDs);
      window.addEventListener('mousemove', lbDm);
      window.addEventListener('mouseup', lbDe);
      lbImg.addEventListener('touchstart', lbDs, {passive:false});
      window.addEventListener('touchmove', lbDm, {passive:true});
      window.addEventListener('touchend', lbDe);

      document.getElementById('lightboxClose').addEventListener('click', function(){ lightbox.classList.remove('is-open'); startAuto(); });
      lightbox.addEventListener('click', function(e){ if(e.target === lightbox){ lightbox.classList.remove('is-open'); startAuto(); } });
    }

    render(false);
  }
})();

