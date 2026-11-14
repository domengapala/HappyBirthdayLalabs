/* =========================================================================
   CONFIG: EASY TO EDIT EVERYTHING HERE
   ========================================================================= */

const CONFIG = {
    // ===== MUSIC URL =====
    musicURL: ["Bruno_Mars_-_Risk_It_All.mp3", "Bruno Mars - Risk It All.mp3"], // sinusubukan ang dalawa, kaya gagana kahit alin ang tama

    // ===== PHOTOS =====
    // Ilagay ang lahat ng photos sa folder na "images" (katabi ng index.html), lahat .jpg:
    //   hero | story-1 to story-5 (optional ang story-1: may card na lalabas kapag wala) | first-date-1 to first-date-3 | gallery-01 to gallery-12
    // Kapag may kulang pa, may lalabas na placeholder na nakasulat ang eksaktong pangalan ng file.
    heroPhoto: "images/hero.jpg",

    // Kung natatandaan mo ang unang reply mo, isulat dito (lalabas sa bubble ng "How It Started").
    // Kapag "", typing dots lang ang lalabas.
    storyReplyText: "",

    // Profile pic ni Mary para sa bilog ng "How It Started" (optional): ilagay sa folder na images bilang profile.jpg.
    // Kapag wala ang file, "M" ang lalabas.
    storyProfile: "images/profile.jpg", 

    // ===== TIMELINE ("OUR STORY") =====
    timeline: [
        {
            date: "12 . 31 . 2023",
            title: "How It Started",
            cardFallback: true, // walang photo? card ang lalabas; kapag nilagay mo ang story-1.jpg, iyon na ang gagamitin
            description: "A simple Instagram story reply started our story. Wala akong idea noon kung saan tayo dadalhin nung simpleng conversation na 'yon.",
            image: "images/story-1.jpg" 
        },
        {
            date: "2024",
            title: "Getting Closer",
            description: "We slowly became closer through conversations, school, and getting to know each other. Naging normal na lang na nandiyan ka sa araw-araw ko.",
            image: "images/story-2.jpg"
        },
        {
            date: "2025",
            title: "Falling",
            description: "Our conversations became deeper. I started looking forward to your messages, your random thoughts, your reactions.",
            image: "images/story-3.jpg"
        },
        {
            date: "11 . 30 . 2025",
            title: "Our First Date",
            description: "The day we finally went out together. Doon naging mas real yung feeling na, 'Ito na 'yon. This is actually happening.'",
            image: "images/story-4.jpg"
        },
        {
            date: "2026",
            title: "Growing Together",
            description: "Church dates, eating together, random conversations, teasing, apologies, forgiveness, and growing closer.",
            image: "images/story-5.jpg"
        }
    ],

    // ===== FIRST DATE STACK IMAGES =====
    firstDate: [
        "images/first-date-1.jpg",
        "images/first-date-2.jpg",
        "images/first-date-3.jpg"
    ],

    // ===== MEMORY CARDS (Flip) =====
    memoryCards: [
        {
            front: "A little thing you did that meant a lot?",
            back: "The small ways you cared. You probably thought they were ordinary, but I remembered them."
        },
        {
            front: "When did you start feeling different?",
            back: "When I realized I wasn’t just enjoying our conversations anymore I was starting to look forward to you being part of my day."
        },
        {
            front: "What made you different?",
            back: "You made me feel cared for in the same way I had always wanted to care for someone."
        }
    ],

    // ===== GALLERY (12 photos: isang photo bawat slot, hindi collage) =====
    gallery: [
        { src: "images/gallery-01.jpg", caption: "Your smile" },
        { src: "images/gallery-02.jpg", caption: "A laugh we shared" },
        { src: "images/gallery-03.jpg", caption: "A silly moment" },
        { src: "images/gallery-04.jpg", caption: "A quiet moment" },
        { src: "images/gallery-05.jpg", caption: "My favorite photo of you" },
        { src: "images/gallery-06.jpg", caption: "Us, on an ordinary day" },
        { src: "images/gallery-07.jpg", caption: "A meal with you" },
        { src: "images/gallery-08.jpg", caption: "A Sunday with you" },
        { src: "images/gallery-09.jpg", caption: "A place I'd go back to" },
        { src: "images/gallery-10.jpg", caption: "A little gift" },
        { src: "images/gallery-11.jpg", caption: "Reminds me of you" },
        { src: "images/gallery-12.jpg", caption: "A day I didn't want to end" }
    ],

    // ===== THINGS I LOVE =====
    thingsILove: [
        { title: "Your care", desc: "I noticed kung paano mo ako alagaan at pahalagahan." },
        { title: "Your little efforts", desc: "Hindi ko minamaliit ang mga effort mo. I notice them, and I appreciate them." },
        { title: "Your laughter", desc: "It just makes everything feel a little lighter." },
        { title: "Your random reactions", desc: "Kahit sa simpleng bagay, ang cute ng mga reactions mo." },
        { title: "Your patience", desc: "Thank you for choosing to understand and stay." },
        { title: "The way you make me feel safe", desc: "You helped me become more comfortable with myself again." },
        { title: "The way you make me feel appreciated", desc: "You made me feel like I was worth caring for too." }
    ],

    // ===== OPEN WHEN =====
    openWhen: [
        {
            title: "Open when you miss me",
            message: "Come back here for a second.<br><br>Read this slowly.<br><br>Even when we’re not together, there are still little parts of my day that remind me of you. A song, a random thought, a place, a joke, or something I know you’d react to.<br><br>So if you miss me, just remember: somewhere in my day, I’m probably thinking about you too."
        },
        {
            title: "Open when you're having a bad day",
            message: "You don’t always have to be okay.<br><br>You don’t have to pretend that nothing bothers you. Take a breath, rest a little, and be gentle with yourself.<br><br>One bad day doesn’t erase everything you’ve accomplished. And one difficult moment doesn’t make you any less worthy of being proud of."
        },
        {
            title: "Open when you doubt yourself",
            message: "I hope you see yourself the way I sometimes see you.<br><br>Not perfect. Not without flaws. Just genuinely you.<br><br>And that version of you is already someone worth loving, appreciating, and choosing."
        },
        {
            title: "Open when you need a reminder",
            message: "Just in case you forget: you matter to me.<br><br>Your little habits matter. Your random messages matter. Your effort matters. Your presence matters.<br><br>And the memories we’ve made are not small things to me."
        }
    ],

    // ===== LONG LOVE LETTER =====
    loveLetter: `Mary,

Hindi ko talaga alam kung paano ko isasama sa isang website lahat ng mga nangyari sa'tin nitong nakaraang taon, pero gusto kong subukan. Kasi ang dami nating pinagdaanan, ang dami nating maliliit na memories, at ang dami ring bagay na baka sa iba ordinary lang pero para sa'kin, may meaning.

Kapag binalikan ko kung paano tayo nagsimula, nakakatawa isipin na isang simpleng reply lang sa Instagram story mo noong December 31, 2023 'yung naging simula ng lahat. Wala naman akong idea noon kung saan tayo dadalhin nung simpleng conversation na ’yon. Hindi ko rin naman in-expect na darating yung time na magiging ganito ka-importante ka sa buhay ko.

At first, casual lang talaga. Nag-uusap kapag may kailangan, may mga random na topic, may mga biruan. Tapos habang tumatagal, unti-unti kitang nakilala nang mas malalim. Mas naging comfortable tayo sa isa’t isa. Mas naging natural yung pag-uusap. Hanggang sa dumating tayo sa point na parang naging normal na lang na nandiyan ka sa araw-araw ko.

At doon ko siguro unang napansin na iba na.

Hindi lang kita gustong kausap. Hinahanap na kita.

I started looking forward to your messages, your random thoughts, your reactions, your jokes, pati na rin sa mga pang-aasar mo sa akin. Yung mga bagay na dati simpleng conversations lang, eventually naging memories na hindi ko gustong mawala.

And then there were the little things you did for me.

Yung pag-aalala mo. Yung pagiging maalaga mo. Yung mga maliit na bagay na binibigay mo. Yung simpleng pag-compliment mo sa akin, lalo na kapag sinasabihan mo akong “pogi,” kahit minsan hindi ko naman talaga feel HAHAHA.

Baka para sa'yo maliit na bagay lang ’yon.

Pero sa akin, hindi.

Especially because I've experienced what it feels like to give so much of yourself to someone and feel like you’re not getting the same kind of care back.

Kaya nung dumating ka, I noticed.

Napansin ko kung paano mo ako alagaan.
Napansin ko kung paano mo ako pahalagahan.
Napansin ko kung paano mo ako kayang pasayahin sa simpleng paraan.

And little by little, you helped me become more comfortable with myself again.

You made me feel seen.

You made me feel appreciated.

And more than anything, you made me feel like I was worth caring for too.

Hindi rin naman naging perfect lahat.

Nagkaroon tayo ng misunderstandings.
May mga pagkakataong nag-overthink tayo.
May mga pagkakataong may nasasabi o nagagawa na nakakasakit.
May moments na kailangan nating humingi ng sorry at magpatawad.

Pero kapag iniisip ko ngayon, isa ’yan sa mga bagay na nagpapahalaga sa story natin.

Kasi hindi lang naman puro happy moments ang relationship ng dalawang taong tunay na may halaga sa isa't isa.

Sometimes, you learn each other through the difficult moments too.

At gusto ko ’yung fact na kahit nagkaroon tayo ng gano’n, pinili pa rin nating ayusin.

Pinili pa rin nating mag-usap.

Pinili pa rin nating intindihin ang isa’t isa.

At pinili pa rin nating manatili.

And then came our first date.

November 30, 2025.

One day that probably looked ordinary from the outside, but became one of the dates I’ll always remember.

Kasi doon naging mas real yung feeling na, “Ito na ’yon. This is actually happening.”

At ngayon, one year later, nandito ako gumagawa ng website para sa'yo.

Honestly, kung sinabi mo sa akin noon na aabot tayo dito, baka natawa lang ako.

Pero ngayon, hindi ko na gustong isipin yung buhay ko na wala yung mga memories na ginawa natin.

Yung church dates natin.
Yung pagkain natin together.
Yung pagbisita ko sa inyo.
Yung paghingi ko ng permission sa parents mo.
Yung mga random conversations natin.
Yung pang-aasar.
Yung little gifts.
Yung mga moments na tahimik lang pero comfortable.
Yung mga pagkakataong pareho tayong pagod pero gusto pa rin nating mag-usap.

Ang daming simple moments.

Pero somehow, sila yung naging favorite ko.

At gusto kong malaman mo na hindi ko minamaliit ang mga effort mo.

I remember them.

I notice them.

And I appreciate them more than I probably say out loud.

I also want you to know that I don't love some perfect version of you.

I know you have insecurities.
I know you overthink sometimes.
I know there are days when you’re too hard on yourself.
I know may moments kang hindi mo nakikita yung sarili mo the way other people see you.

Pero hindi ibig sabihin no’n na kailangan mong maging perfect para maging deserving ng love, appreciation, or care.

I want you to know that I see you as you are.

Your good days.
Your bad days.
Your clingy moments.
Your sunget moments.
Your playful moments.
Your quiet moments.
Your overthinking.
Your random thoughts.

Ikaw.

And somehow, ikaw pa rin yung gusto kong makasama.

I also don't want to make big promises just for the sake of sounding romantic.

Mas gusto kong maging honest.

I can't promise that life will always be easy.

I can't promise na never tayong magkakaroon ng misunderstanding ulit.

Pero kaya kong sabihin na habang nandito ako, I want to keep choosing honesty, respect, effort, and understanding with you.

I want to keep learning you.

I want to keep making memories with you.

I want to keep being someone you feel safe talking to.

And I want to keep being your best friend while being the person who loves you.

Maybe that's one of my favorite things about us.

Hindi lang kita minahal as someone I like.

I also genuinely enjoy being your friend.

I enjoy talking to you.

I enjoy laughing with you.

I enjoy annoying you.

I enjoy being there for you.

At kahit simpleng “kumain ka na ba?” or random na usapan lang, somehow it still means something when it comes from you.

Mary, thank you.

Thank you for entering my life.

Thank you for trusting me.

Thank you for caring for me.

Thank you for every little gift.

Thank you for every compliment.

Thank you for every conversation.

Thank you for every memory.

And thank you for every version of yourself that you allowed me to know.

This website is not even enough to contain everything I want to say.

Pero gusto kong itry because you deserve something that shows how much the little things matter to me.

So if you ever question whether I remember the little moments we had, I hope this website reminds you that I do.

If you ever wonder whether your effort matters, I hope this reminds you that it does.

And if you ever wonder whether you became important to me...

You did.

More than you probably realize.

One year since our first date.

One year of memories.

One year of learning each other.

And honestly?

I'm still excited about the memories we haven't made yet.

Happy birthday, Mary.

Thank you for being my Lalabs, my best friend, my favorite person to annoy, and one of the most important people in my life.

I hope this year gives you more reasons to smile.

I hope you become more confident in yourself.

I hope you achieve the things you’ve been working for.

And I hope you always remember that you don't have to be perfect to be worthy of good things.

You already are.

Happy birthday, Lalabs.

One year down.

So many memories to go.

— Lance 🤍`,

    // ===== BIRTHDAY MESSAGE =====
    birthdayMessage: `Happy birthday, Lalabs. 🤍

Today isn't just about celebrating the day you were born.

It's also a reminder of how grateful I am that at some point in my life, our paths crossed.

I don't know exactly where life will take us, but I know that I’m thankful for every moment that brought me closer to you.

Thank you for making ordinary days feel a little less ordinary.

Thank you for the random messages, the jokes, the teasing, the little gifts, the care, the effort, and even the moments when you annoy me HAHAHA.

Thank you for being someone I can laugh with, talk to, be comfortable with, and be myself around.

I hope you never forget that you are appreciated not only for the things you do for other people, but simply for being you.

I hope this new year of your life brings you more happiness, more confidence, more achievements, and more moments you'll be proud of.

And I hope you continue becoming the person you've always wanted to be.

I'll always be rooting for you.

I hope today reminds you of how loved you are.

And selfishly, I hope I get to be part of many more birthdays, memories, random dates, church visits, food trips, conversations, and ordinary days with you.

Happy birthday again, Mary.

Enjoy your day.

You deserve it.

— Lance 🤍`,

    // ===== MGA PETSA (para sa live counters at sa locked letter) =====
    storyReplyDate: "2023-12-31",
    firstDateDay: "2025-11-30",
    unlockDate: "2026-11-30", // kailan magbubukas ang "One Year Later" letter. Gawing "" kung ayaw mong i-lock. Kapag lumampas na ang petsa, bukas na ito palagi.

    // ===== ONE YEAR LETTER (locked hanggang unlockDate) =====
    anniversaryLetter: `Mary,

Isang taon na pala mula nung November 30, 2025.
Isang araw na mukhang ordinary lang kung titingnan mula sa labas.

Pero para sa akin, doon naging totoo lahat. Hindi na lang s'ya messages tsaka random na usapan. Magkasama na tayong lumabas, at doon ko mas naramdaman na gusto kitang makilala pa nang mas malalim.

Ang dami nang nangyari mula noon.
Church dates.
Food trips.
Mga pang-aasar.
Mga little gifts.
Mga sorry, at mga pagpapatawad.

Hindi naging perfect lahat.
Pero pinili pa rin nating mag-usap.
Pinili pa rin nating intindihin ang isa’t-isa.
Pinili pa rin nating manatili.

Kaya gusto ko lang sabihin na thank you.
Thank you for staying.
Thank you for being patient with me.
Thank you for making ordinary days feel worth remembering.

Hindi ko alam kung ano pa ang mangyayari sa susunod na taon, at ayokong mangako ng mga bagay na pang-pelikula lang.

Pero ito ang kaya kong sabihin: gusto ko pa ring maging honest sa’yo, gusto ko pa ring maging maalaga, at gusto ko pa ring kilalanin ka araw-araw.

Isang taon na.
Pero kung ako ang tatanungin, parang nagsisimula pa lang tayo.
Happy Nov 30, Lalabs.

— Lance 🤍`,

    // ===== SECRET MESSAGE =====
    secretMessage: `If you're reading this part...<br><br>Yes, I really made an entire website for you.<br><br>HAHAHAHA.<br><br>I told you I wanted to make your birthday memorable.<br><br>But honestly, this website isn't really about the website.<br><br>It's about every little memory behind it.<br><br>And if I had to choose one thing to keep from everything here...<br><br>I'd choose the moments where it was just us.<br><br>No big plans.<br>No perfect setting.<br>Just you and me.<br><br>Happy birthday, Lalabs.<br><br>I love you. 🤍`
};

/* =========================================================================
   SYSTEM LOGIC 
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    const burst = () => {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const colors = ['#C8315A', '#FFE98A', '#FFD1DC', '#C9ECDD', '#C9D9F7'];
        for (let i = 0; i < 36; i++) {
            const heart = i % 4 === 0, p = document.createElement('span');
            p.className = 'confetti';
            p.textContent = heart ? '♥' : '';
            p.style.cssText = `left:${Math.random() * 100}vw;background:${heart ? 'none' : colors[i % colors.length]};color:${colors[0]};animation-delay:${Math.random() * 0.6}s;animation-duration:${2.4 + Math.random() * 1.6}s;--dx:${(Math.random() - 0.5) * 160}px;--rot:${Math.random() * 720}deg`;
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 4800);
        }
    };

    // 1. Loading Screen (cross-fade ang mga linya, tapos lalabas ang button)
    const loadingScreen = document.getElementById('loading-screen');
    const loadLines = [1, 2, 3].map(n => document.getElementById('load-text-' + n));
    const enterBtn = document.getElementById('enter-btn');
    let seen = false; // mas maikli ang intro kapag napanood na dati
    try { seen = localStorage.getItem('intro-seen') === '1'; } catch (e) {}
    loadLines.forEach((el, i) => seen && i < 2 ? null : setTimeout(() => {
        loadLines.forEach(l => l.classList.remove('show'));
        el.classList.add('show');
    }, seen ? 300 : 300 + i * 2100));
    setTimeout(() => { const bar = document.querySelector('.loading-line'); if (seen) bar.style.transitionDuration = '1.2s'; bar.style.width = '100%'; }, 100);
    setTimeout(() => { enterBtn.classList.add('ready'); try { localStorage.setItem('intro-seen', '1'); } catch (e) {} }, seen ? 900 : 300 + 2 * 2100 + 1300);
    enterBtn.addEventListener('click', () => {
        document.querySelector('.hero-section').style.filter = "blur(0px)";
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 1000);
        burst();
        document.getElementById('play-pause-btn').click(); // dito magsisimula ang music (kailangan ng tap)
    });

    // Initial Blur on Hero
    document.querySelector('.hero-section').style.filter = "blur(10px)";

    // 2. Format Texts & Inject Data
    // Placeholder na may nakasulat na pangalan ng file, para alam mo kung ano ang ilalagay
    const placeholder = (src) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750"><rect width="100%" height="100%" fill="#FDEBEF"/><rect x="24" y="24" width="552" height="702" fill="none" stroke="#CF3A5C" stroke-width="2" stroke-dasharray="10 8"/><text x="300" y="360" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#CF3A5C">Photo goes here:</text><text x="300" y="410" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#1F2B5C">${src}</text></svg>`);
    // Card na lalabas sa "How It Started" kapag walang story-1.jpg
    const storyCard = () => `<div class="story-card"><div class="story-ring"><span>${CONFIG.storyProfile ? `<img src="${CONFIG.storyProfile}" alt="Mary" data-ring="1">` : 'M'}</span></div><div class="story-bubble">${CONFIG.storyReplyText || '<i></i><i></i><i></i>'}</div><div class="story-note">reply sent ✓</div></div>`;
    document.addEventListener('error', (e) => {
        const img = e.target, s = img.tagName === 'IMG' && img.getAttribute('src');
        if (!s || s.startsWith('data:')) return;
        if (img.dataset.card) { img.outerHTML = storyCard(); return; }
        if (img.dataset.ring) { img.parentNode.textContent = 'M'; return; }
        img.src = placeholder(s);
    }, true);

    // Format text to proper paragraphs
    const formatText = (text) => {
        const out = [];
        let stanza = [];
        const flush = () => { if (stanza.length) out.push(`<p class="stanza">${stanza.join('<br>')}</p>`); stanza = []; };
        text.trim().split(/\n\s*\n/).map(b => b.trim()).forEach((b, i) => {
            const rows = b.split('\n');
            if (i === 0 && rows.length === 1 && /,$/.test(b)) out.push(`<p class="greeting">${b}</p>`);
            else if (b.startsWith('—')) { flush(); out.push(`<p class="signoff">${b}</p>`); }
            else if (rows.every(r => r.length <= 80)) { if (stanza.length + rows.length > 7) flush(); stanza.push(...rows); }
            else { flush(); out.push(`<p>${rows.join('<br>')}</p>`); }
        });
        flush();
        return `<div class="letter${text.trim().length < 200 && !/\n\s*\n/.test(text.trim()) ? ' short' : ''}">${out.join('')}</div>`;
    };

    // Timeline
    const timelineContainer = document.getElementById('timeline-container');
    CONFIG.timeline.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `timeline-item fade-in-up delay-${(index % 3) + 1}`;
        div.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-text">${item.description}</p>
            </div>
            <div class="timeline-img-wrapper">
                <img src="${item.image}" alt="${item.title}" class="timeline-img" loading="lazy" decoding="async"${item.cardFallback ? ' data-card="1"' : ''}>
            </div>
        `;
        const wrap = div.querySelector('.timeline-img-wrapper');
        wrap.addEventListener('click', () => { if (!wrap.querySelector('.story-card')) openLightbox([{ src: item.image, caption: item.title }], 0); });
        timelineContainer.appendChild(div);
    });

    // Memory Cards (Flip)
    const cardsContainer = document.getElementById('cards-container');
    CONFIG.memoryCards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = `flip-card fade-in-up delay-${(index % 3) + 1}`;
        div.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">${card.front}</div>
                <div class="flip-card-back">${card.back}</div>
            </div>
        `;
        div.addEventListener('click', () => div.classList.toggle('flipped'));
        cardsContainer.appendChild(div);
    });

    document.getElementById('hero-img').src = CONFIG.heroPhoto;

    // First Date
    document.getElementById('fd-stack-1').src = CONFIG.firstDate[0];
    document.getElementById('fd-stack-2').src = CONFIG.firstDate[1];
    document.getElementById('fd-stack-3').src = CONFIG.firstDate[2];
    
    
    document.getElementById('fd-photo-stack').addEventListener('click', () => {
        document.getElementById('fd-reveal').classList.remove('hidden');
        openLightbox(CONFIG.firstDate.map(src => ({src: src, caption: "November 30, 2025"})), 0);
    });

    // Gallery
    const galleryContainer = document.getElementById('gallery-container');
    CONFIG.gallery.forEach((photo, index) => {
        const div = document.createElement('div');
        div.className = `gallery-item fade-in-up delay-${(index % 4)}`;
        div.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy" decoding="async"><span class="gallery-cap">${photo.caption}</span>
            <div class="gallery-overlay"><svg class="zoom-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg></div>
        `;
        div.addEventListener('click', () => openLightbox(CONFIG.gallery, index));
        galleryContainer.appendChild(div);
    });

    // Things I Love
    const thingsContainer = document.getElementById('things-container');
    CONFIG.thingsILove.forEach((thing, index) => {
        const span = document.createElement('span');
        span.className = `thing-tag fade-in-up delay-${index % 5}`;
        span.innerText = thing.title;
        span.addEventListener('click', () => openGenericModal(thing.title, null, formatText(thing.desc)));
        thingsContainer.appendChild(span);
    });

    // Open When
    const envelopesContainer = document.getElementById('envelopes-container');
    CONFIG.openWhen.forEach((env, index) => {
        const div = document.createElement('div');
        div.className = `envelope fade-in-up delay-${index % 4}`;
        div.innerHTML = `<h3 class="env-title">${env.title}</h3>`;
        div.addEventListener('click', () => openGenericModal(env.title, null, formatText(env.message.replace(/<br>/g, '\n'))));
        envelopesContainer.appendChild(div);
    });

    // Envelopes para sa Long Letters
    document.getElementById('open-lsm-btn').addEventListener('click', () => {
        openGenericModal("What I Never Want You To Forget", null, formatText(CONFIG.loveLetter));
    });
    document.getElementById('open-bday-btn').addEventListener('click', () => {
        openGenericModal("Happy Birthday, Lalabs 🤍", null, formatText(CONFIG.birthdayMessage));
    });

    // Reading time ng mga letter
    const readMins = (t) => Math.max(1, Math.round(t.split(/\s+/).length / 200));
    document.querySelector('#open-lsm-btn .env-subtitle').textContent = `${readMins(CONFIG.loveLetter)} min read`;
    document.querySelector('#open-bday-btn .env-subtitle').textContent = `${readMins(CONFIG.birthdayMessage)} min read`;

    // Locked letter (magbubukas sa unlockDate; dagdagan ng ?unlock ang URL para ma-test)
    const unlockAt = CONFIG.unlockDate ? new Date(CONFIG.unlockDate + 'T00:00:00') : new Date(0);
    const novBtn = document.getElementById('open-nov30-btn');
    const LOCK_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
    const isUnlocked = () => Date.now() >= unlockAt.getTime() || location.search.includes('unlock');
    const daysLeft = Math.ceil((unlockAt.getTime() - Date.now()) / 86400000);
    novBtn.classList.toggle('locked', !isUnlocked());
    novBtn.querySelector('.letter-seal').innerHTML = isUnlocked() ? '♥' : LOCK_SVG;
    novBtn.querySelector('.env-subtitle').textContent = isUnlocked() ? `${readMins(CONFIG.anniversaryLetter)} min read` : `opens in ${daysLeft} day${daysLeft === 1 ? '' : 's'}`;
    novBtn.addEventListener('click', () => {
        if (isUnlocked()) openGenericModal("Nov 30, One Year Later 🤍", null, formatText(CONFIG.anniversaryLetter));
        else openGenericModal("Not yet 🤍", null, formatText(`This one opens on ${unlockAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.\nCome back then.`));
    });

    // Secret Message
    document.getElementById('secret-btn').addEventListener('click', () => {
        openGenericModal("P.S.", null, formatText(CONFIG.secretMessage.replace(/<br>/g, '\n')));
    });

    // 3. Scroll & Progress Logic
    const sections = document.querySelectorAll('section[data-chapter]');
    const scrollChapter = document.getElementById('scroll-chapter');
    const scrollBar = document.getElementById('scroll-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                scrollChapter.innerText = entry.target.getAttribute('data-chapter');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(el => observer.observe(el));
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Nav highlight (batay sa scroll position, kasama na ang Home)
    const navLinkEls = [...document.querySelectorAll('.nav-links a')];
    const navTargets = navLinkEls.map(a => document.querySelector(a.getAttribute('href')));
    const markNav = () => {
        const y = window.innerHeight * 0.4;
        let cur = -1;
        navTargets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= y) cur = i; });
        const last = navTargets.length - 1;
        if (cur === last && navTargets[last].getBoundingClientRect().bottom < y) cur = -1;
        navLinkEls.forEach((a, i) => a.classList.toggle('current', i === cur));
    };
    window.addEventListener('scroll', markNav, { passive: true });
    markNav();

    // Live counters (kinukuha sa mga petsa sa CONFIG)
    const daysSince = (d) => Math.max(0, Math.floor((Date.now() - new Date(d + 'T00:00:00').getTime()) / 86400000));
    document.getElementById('days-story').dataset.target = daysSince(CONFIG.storyReplyDate);
    document.getElementById('days-date').dataset.target = daysSince(CONFIG.firstDateDay);

    // Counter Animation
    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter-number');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const updateCount = () => {
                        const inc = target / 50; 
                        if(count < target) {
                            count += inc;
                            counter.innerText = Math.ceil(count).toLocaleString();
                            setTimeout(updateCount, 40);
                        } else {
                            counter.innerText = target.toLocaleString();
                        }
                    };
                    updateCount();
                });
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counterObserver.observe(document.getElementById('counters'));

    window.addEventListener('scroll', () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        scrollBar.style.height = scrolled + "%";
    });

    // 4. Modals & Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbCounter = document.getElementById('lightbox-counter');
    let currentLbArray = [];
    let currentLbIndex = 0;

    const genericModal = document.getElementById('generic-modal');
    const modalContentArea = document.getElementById('modal-content-area');

    function openLightbox(array, index) {
        currentLbArray = array;
        currentLbIndex = index;
        updateLightbox();
        lightbox.classList.remove('hidden');
    }

    function updateLightbox() {
        lbImg.src = currentLbArray[currentLbIndex].src || currentLbArray[currentLbIndex];
        
        lbCaption.innerText = currentLbArray[currentLbIndex].caption || "";
        const many = currentLbArray.length > 1;
        document.querySelectorAll('.lightbox-prev, .lightbox-next').forEach(b => b.style.visibility = many ? 'visible' : 'hidden');
        lbCounter.style.display = many ? '' : 'none';
        lbCounter.innerText = `${(currentLbIndex + 1).toString().padStart(2, '0')} / ${currentLbArray.length.toString().padStart(2, '0')}`;
    }

    document.querySelector('.lightbox-prev').addEventListener('click', () => {
        currentLbIndex = (currentLbIndex - 1 + currentLbArray.length) % currentLbArray.length;
        updateLightbox();
    });
    document.querySelector('.lightbox-next').addEventListener('click', () => {
        currentLbIndex = (currentLbIndex + 1) % currentLbArray.length;
        updateLightbox();
    });

    function openGenericModal(title, imgUrl, text) {
        let html = `<h3 class="modal-custom-title">${title}</h3>`;
        if (imgUrl) html += `<img src="${imgUrl}" class="modal-custom-img">`;
        html += `<div class="modal-custom-text">${text}</div><button type="button" class="modal-done outline-btn small-btn">Close</button>`;
        modalContentArea.innerHTML = html;
        genericModal.classList.remove('hidden');
        genericModal.querySelector('.modal-card').scrollTop = 0;
        modalContentArea.querySelector('.modal-done').addEventListener('click', () => genericModal.classList.add('hidden'));
    }

    // QA: buksan ang index.html?check para makita kung kumpleto na ang photos (✓ meron, ✗ kulang, – optional)
    if (location.search.includes('check')) {
        const tl = ['screenshot o photo ng unang usapan (optional, may card kapag wala)', 'photo o chat noong 2024: school, araw-araw na usapan', 'screenshot ng malalalim na usapan o photo noong 2025', 'pinaka-representative na photo ng first date', 'photo ngayong 2026: church o kainan'];
        const fd = ['pinakamagandang kuha n’yong dalawa (ito ang unang lalabas)', 'lugar o pagkain noong first date', 'candid niya, o kayong dalawa'];
        const gl = ['candid o portrait niya na nakangiti', 'kayo (o siya) na tumatawa', 'nakakatuwa o kulit na kuha', 'kalmadong kuha: nakaupo, nagbabasa, o nakatingin sa malayo', 'ang pinakamagandang kuha mo sa kanya', 'kayong dalawa sa ordinaryong araw (selfie ok)', 'pagkain n’yo, o kayo sa mesa', 'photo sa church (labas, o pagkatapos ng service)', 'lugar na napuntahan n’yo (kainan, park, simbahan, kalsada)', 'regalong binigay mo, o galing sa kanya', 'kahit anong bagay na nagpapaalala sa’yo sa kanya (bulaklak, pagkain, lugar)', 'kahit anong kuha mula sa araw na ayaw mo nang matapos'];
        const slots = [
            [CONFIG.heroPhoto, 'Hero', 'solo photo ni Mary, patayo, kita ang mukha'],
            [CONFIG.storyProfile, 'Profile ni Mary', 'square, mukha sa gitna (optional, para sa bilog ng How It Started)', true],
            ...CONFIG.timeline.map((t, i) => [t.image, t.title, tl[i], t.cardFallback]),
            ...CONFIG.firstDate.map((f, i) => [f, 'First date ' + (i + 1), fd[i]]),
            ...CONFIG.gallery.map((g, i) => [g.src, g.caption, gl[i]])
        ].filter(s => s[0]);
        const box = document.createElement('div');
        box.className = 'check-box';
        box.textContent = 'Checking photos…';
        document.body.appendChild(box);
        const rows = [];
        let done = 0, bad = 0;
        slots.forEach(([f, label, hint, optional], i) => {
            const im = new Image();
            const fin = (ok) => {
                if (!ok && !optional) bad++;
                rows[i] = `<div class="${ok ? 'ok' : optional ? 'opt' : 'bad'}">${ok ? '✓' : optional ? '–' : '✗'} <b>${f.split('/').pop()}</b> · ${label}<small>${hint || ''}</small></div>`;
                if (++done === slots.length) box.innerHTML = `<b>${bad ? bad + ' ang kulang pa' : 'Kumpleto na ✓'}</b>${rows.join('')}`;
            };
            im.onload = () => fin(true);
            im.onerror = () => fin(false);
            im.src = f;
        });
    }

    // Swipe kaliwa/kanan sa lightbox (phone)
    let touchX = null;
    lightbox.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50 && currentLbArray.length > 1) document.querySelector(dx > 0 ? '.lightbox-prev' : '.lightbox-next').click();
    });

    // Close logic
    document.querySelectorAll('.lightbox-close, .lightbox-bg').forEach(btn => btn.addEventListener('click', () => lightbox.classList.add('hidden')));
    document.querySelectorAll('.modal-close, .modal-bg').forEach(btn => btn.addEventListener('click', () => genericModal.classList.add('hidden')));
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") { lightbox.classList.add('hidden'); genericModal.classList.add('hidden'); }
        if (!lightbox.classList.contains('hidden')) {
            if (e.key === "ArrowLeft") document.querySelector('.lightbox-prev').click();
            if (e.key === "ArrowRight") document.querySelector('.lightbox-next').click();
        }
    });

    // 5. Upgraded Music Player
    const tracks = [].concat(CONFIG.musicURL);
    let trackTry = 0;
    const audio = new Audio(tracks[0]);
    audio.addEventListener('error', () => {
        if (++trackTry < tracks.length) { audio.src = tracks[trackTry]; audio.load(); if (isPlaying) audio.play().catch(() => {}); }
    });
    audio.loop = true;
    const playBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const disc = document.getElementById('record-disc');
    const nowPlaying = document.getElementById('now-playing-text');
    const progressFill = document.getElementById('progress-fill');
    const progressBg = document.getElementById('progress-bg');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    let isPlaying = false;

    const formatTime = (time) => {
        const mins = Math.floor(time / 60) || 0;
        const secs = Math.floor(time % 60) || 0;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    audio.addEventListener('loadedmetadata', () => {
        totalDurationEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeEl.innerText = formatTime(audio.currentTime);
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${progressPercent}%`;
        }
    });

    progressBg.addEventListener('click', (e) => {
        const rect = progressBg.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
    });

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            disc.classList.remove('spin');
            nowPlaying.innerText = "Paused";
        } else {
            audio.play().catch(e => console.log("Audio failed:", e));
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            disc.classList.add('spin');
            nowPlaying.innerText = "Playing";
        }
        isPlaying = !isPlaying;
    });

    // Mobile Nav & Utils
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
    
    document.getElementById('open-story-btn').addEventListener('click', () => document.getElementById('story').scrollIntoView({ behavior: 'smooth' }));
    document.getElementById('replay-btn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});