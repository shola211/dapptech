document.addEventListener("DOMContentLoaded", (function() {
    const t = document.querySelectorAll(".token.keyword");
    for (let e = 0; e < t.length; e++) {
        const n = t[e]; - 1 !== ["function", "def", "class"].indexOf(n.textContent) ? n.classList.add("def") : "this" === n.textContent && n.classList.add("this")
    }
    const e = document.querySelectorAll(".line-highlight");
    for (let t = 0; t < e.length; t++) {
        const n = e[t];
        if (!n.parentNode.classList.contains("line-numbers")) {
            const t = 1.5 * (n.getAttribute("data-start") - 1);
            n.style.top = t + "em"
        }
    }! function() {
        if (!window.ClipboardJS) return;
        if (!window.hcbVars ? .showCopyBtn) return;
        let t = 1;
        const e = document.querySelectorAll(".hcb_wrap");
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                c = o.querySelector("code");
            if (null === c) continue;
            const s = document.createElement("button");
            s.classList.add("hcb-clipboard"), s.setAttribute("data-clipboard-target", '[data-hcb-clip="' + t + '"]'), s.setAttribute("data-clipboard-action", "copy"), s.setAttribute("aria-label", window.hcbVars ? .copyBtnLabel || ""), o.append(s), c.setAttribute("data-hcb-clip", t), t++
        }
        new ClipboardJS(".hcb-clipboard").on("success", (function(t) {
            const e = t.trigger;
            e.classList.add("-done"), setTimeout((() => {
                e.classList.remove("-done")
            }), 5e3)
        }))
    }()
}));