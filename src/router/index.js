import Vue from 'vue'

import Router from 'vue-router'

import main from '@/components/main'

import type from '../components/type/type'

import typelist from '../components/type/typelist'

import typedetail from '../components/type/typedetail'

import typeitemdetail from '../components/type/typeitemdetail'

import paihang from '../components/paihang/paihang'

import paihanglist from '../components/paihang/paihanglist'

import search from '../components/search/search'

import novelcontent from '../components/novelcontent'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: main
    }, {
        path: '/typedetail',
        name: 'typedetail',
        component: typedetail
    }, {
        path: '/typeitemdetail',
        name: 'typeitemdetail',
        component: typeitemdetail
    }, {
        path: '/type',
        component: type,
        children: [{
            path: '/typelist',
            name: 'typelist',
            component: typelist
        }]
    }, {
        path: '/paihang',
        component: paihang
    }, {
        path: '/paihanglist',
        component: paihanglist
    }, {
        path: '/search',
        component: search
    }, {
        path: '/novelcontent',
        component: novelcontent
    }]
})