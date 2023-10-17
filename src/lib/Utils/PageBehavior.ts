export function scrollToPage(e: Event | null, pageName: string = "") {
    const selectedTab = e ? String((e.target as HTMLElement).dataset.tabs) : pageName;
    const el = document.getElementById(selectedTab);

    el && el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    el && setActiveTab(null, selectedTab);
}

export function setActiveTab(e: Event | null, tabName: string = "") {
    const selectedTab = (e) ? (e.target as HTMLElement).dataset.tabs : tabName;
    const tabsContainer = document.getElementById("tabsContainer");

    tabsContainer?.querySelectorAll('button').forEach(e => {
        if (e.dataset.tabs != selectedTab)
            e.querySelector('p')?.classList.remove('underline');
        else
            e.querySelector('p')?.classList.add('underline');
    });
}