﻿:root {
    /* Background Colors */
    --background - color: #12161d;
    --background - color - secondary: #1a222b;
    --background - color - tertiary: #222b33;
    --profile - background - color: rgba(72, 84, 95, 0.12);
    --navbar - background - color: rgba(18, 22, 29);
    --sidebar - border - color: rgba(75, 82, 85, 0.24);
    /* Text Colors */
    --text - color: #fff;
    --text - color - secondary: #adb5bd;
    --menu - item - color: rgb(171, 163, 152);
    --menu - separator - color: #65da41;
    /* Button and Icon Colors */
    --button - background - color: rgb(34, 43, 51);
    --button - border - color: #fff;
    --button - checked - background - color: #fff;
    --button - checked - text - color: #212b36;
    --icon - color - hover: #48545f14;
    /* Widget Colors */
    --widget - income - color: #65da41;
    --widget - expense - color: #ff4e48;
    --widget - balance - color: #2aa1ff;
    /* Pager Colors */
    --pager - background - color: #1a222b;
    --pager - text - color: #adb5bd;
    --pager - current - item - background - color: #31373d;
    /* Fonts and Borders */
    --border - color: #fff;
    --font - family: "Inter", sans - serif;
}

/* General Styling */
html {
    font - size: 14px;
}

@media(min - width: 768px) {
    html {
        font - size: 16px;
    }
}

html, body {
    position: relative;
    min - height: 100 %;
    font - family: var(--font - family);
    background - color: var(--background - color);
    color: var(--text - color);
    overflow: hidden;
    margin: 0;
    padding: 0;
}

*: not(.fa - solid): not(.fa): not(.e - icons) {
    font - family: var(--font - family);
}

.e - bigger {
    font - size: x - large;
}

.main - content {
    margin - left: 290px;
    overflow - y: auto;
    height: 100vh;
}

/* Breadcrumb */
.e - breadcrumb a, .e - breadcrumb a:hover {
    text - decoration: none!important;
    color: inherit!important;
}

/* Button */
.btn: focus, .btn:active {
    outline: none!important;
    box - shadow: none;
}

/* Hyperlink */
.no - a - decoration, .no - a - decoration:hover {
    text - decoration: none;
    color: inherit;
}

/* Grid */
.e - grid {
    border: 0;
    border - radius: 5px;
    background - color: var(--background - color - secondary);
}

    .e - grid.e - gridcontent, .e - grid.e - table {
    background - color: var(--background - color - secondary);
}

    .e - grid.e - gridheader {
    border: 5px;
    border - top - left - radius: 5px;
    border - top - right - radius: 5px;
    padding: 10px;
    background - color: var(--background - color - tertiary);
}

        .e - grid.e - gridheader.e - headercell {
    background - color: var(--background - color - tertiary);
}

    .e - grid.e - gridpager, .e - grid.e - pagercontainer {
    background - color: var(--pager - background - color);
}

    .e - grid.e - content table {
    padding: 0px 10px;
}

.e - pagercontainer.e - icons {
    background - color: var(--pager - background - color);
    border: none!important;
}

.e - pager.e - numericitem {
    color: var(--pager - text - color);
    background - color: var(--pager - background - color);
    padding: 15px!important;
}

    .e - pager.e - numericitem: not(.e - currentitem) {
    border: none!important;
}

    .e - pager.e - numericitem:hover {
    color: var(--text - color);
}

    .e - pager.e - numericitem.e - currentitem {
    color: var(--text - color);
    border: none!important;
    background - color: var(--pager - current - item - background - color);
}

.e - pager div.e - icons: not(.e - disable) {
    color: var(--text - color);
    cursor: pointer;
    font - weight: bold;
}

.e - grid.e - pager {
    padding: 10px;
    border - bottom - left - radius: 5px;
    border - bottom - right - radius: 5px;
}

/* Logo */
.logo - wrapper {
    height: 70px;
    display: flex;
    flex - direction: row;
    align - items: center;
}

.app - logo {
    padding: 10px 10px;
}

/* Menu */
#menu {
    width: 100 % !important;
    background - color: inherit;
    overflow: hidden;
}

#menu.e - menu - item: not(.e - separator) {
    height: 50px;
    border - radius: 4px;
}

#menu.e - menu - item {
    box - sizing: border - box;
}

#menu.e - menu - item a {
    width: 100 %;
    color: var(--menu - item - color);
    font - weight: 300;
    padding: 7px 5px;
    box - sizing: border - box;
}

#menu.e - anchor - wrap {
    display: inline - block;
}

#menu.e - menu - item.e - anchor - wrap span.e - menu - icon {
    color: var(--menu - item - color);
}

#menu.e - menu - item.e - separator {
    border: none;
    margin: 5px 5px;
    text - transform: uppercase;
    font - weight: bold;
    font - size: 13px;
    color: var(--menu - separator - color);
}

#menu.e - menu - item.e - separator: not(: first - child) {
    margin - top: 35px;
}

/* Navbar */
nav.navbar {
    background - color: var(--navbar - background - color);
    margin - left: 290px;
}

nav.navbar i {
    padding: 10px;
    border - radius: 50 %;
    font - size: 1.2rem;
    cursor: pointer;
}

nav.navbar i: hover, nav.navbar img:hover {
    cursor: pointer;
    background - color: var(--icon - color - hover);
    transform: scale(1.05) translateZ(0px);
}

/* Profile Pic */
img.profile - pic {
    width: 45px;
    height: 45px;
    border - radius: 50 %;
}

.profile - wrapper {
    display: flex;
    flex - direction: row;
    align - items: center;
    background - color: var(--profile - background - color);
    padding: 16px 20px;
    border - radius: 12px;
    cursor: pointer;
    margin - bottom: 30px;
}

    .profile - wrapper.titles {
    line - height: 1;
}

/* Radio Button Group */
.e - btn - group.custom - rbt - group {
    width: 100 %;
}

    .e - btn - group.custom - rbt - group.e - btn {
    width: 50 %;
}

.custom - rbt - group label.e - btn {
    box - shadow: none!important;
    border: 1px solid var(--border - color);
    background - color: var(--button - background - color);
    color: var(--text - color);
}

.e - btn - group.custom - rbt - group input: checked + label.e - btn {
    background - color: var(--button - checked - background - color);
    color: var(--button - checked - text - color);
    border: 1px solid var(--border - color);
}

/* Sidebar */
#sidebar {
    background - color: var(--background - color);
    border - right: 1px dashed var(--sidebar - border - color);
    padding: 10px 20px;
    overflow: hidden;
}

#sidebar.e - menu - wrapper {
    width: 100 %;
    background - color: inherit;
}

#sidebar - toggler {
    padding: 10px;
    border - radius: 50 %;
    font - size: 1.2rem;
    cursor: pointer;
}

#sidebar - toggler:hover {
    cursor: pointer;
    background - color: var(--icon - color - hover);
    transform: scale(1.05) translateZ(0px);
}

#sidebar.e - close {
    padding - left: 10px;
    padding - right: 10px;
}

#sidebar.e - close.app - logo {
    display: none;
}

#sidebar.e - close.e - anchor - wrap, #sidebar.e - close.e - menu - item.e - menu - caret - icon {
    font - size: 0px;
}

#sidebar.e - close.profile - wrapper.titles {
    display: none!important;
}

#sidebar.e - open.e - anchor - wrap,
    #sidebar.e - close.e - menu - icon, #sidebar.e - open.e - menu - icon {
    visibility: visible;
}

#sidebar.e - open.profile - wrapper.titles, #sidebar.e - open.app - logo {
    display: flex;
}

#sidebar.e - sidebar.e - right.e - close {
    visibility: visible;
    transform: translateX(0 %);
}

#sidebar.e - open #sidebar - toggler:before {
    content: '\f100';
}

#sidebar.e - close #sidebar - toggler:before {
    content: '\f101';
}

/* Widget */
.widget {
    border - radius: 1rem;
    background - color: var(--background - color - secondary);
}

    .widget.summary > div: first - child {
    background - color: var(--background - color - tertiary);
    padding: 1rem;
    border - top - left - radius: 1rem;
    border - bottom - left - radius: 1rem;
}

        .widget.summary > div: first - child i {
    font - weight: bold;
}

    .widget.income > div: first - child {
    color: var(--widget - income - color);
}

    .widget.expense > div: first - child {
    color: var(--widget - expense - color);
}

    .widget.balance > div: first - child {
    color: var(--widget - balance - color);
}

    .widget.chart {
    padding: 5px;
}


.toast - notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background - color: #333;
    color: #fff;
    padding: 10px 15px;
    border - radius: 5px;
    box - shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z - index: 1000;
    transition: opacity 0.5s;
}

.notification - card {
    border: 1px solid #ddd;
    padding: 10px;
    margin - bottom: 10px;
    background - color: #f9f9f9;
}
}