import React, {Fragment, Component, PureComponent} from 'react';
import Index from '@page/index';
import Page2 from '@page/page2';
import {qus,createMap} from 'esn';


export const compEnum = createMap([{
    alias: "home",
    component: Index
}],"alias")


export let data = [{
    name: "主页",
    zh_CN: "主页",
    en_US: "home",
    path: "/",
    isMenuShow: false,
    component: Index,
    icon: "HomeOutlined",
}];

export let data2 = [{
    name: "第二",
    zh_CN: "第二",
    en_US: "home",
    path: "/dier",
    isMenuShow: false,
    component: Page2,
    icon: "HomeOutlined",
}];
