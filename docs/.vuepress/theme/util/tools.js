'use strict'

const cheerio = require('cheerio')
const container = require('markdown-it-container')
const md = require('markdown-it')()

const strip = (str, tags) => {
  var $ = cheerio.load(str, { decodeEntities: false })
  if (!tags || tags.length === 0) {
    return str
  }
  tags = !Array.isArray(tags) ? [tags] : tags
  var len = tags.length
  while (len--) {
    $(tags[len]).remove()
  }
  return $.html()
}

const fetch = (str, tag) => {
  var $ = cheerio.load(str, { decodeEntities: false })
  if (!tag) return str
  return $(tag).html()
}

const convert = str => {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

exports.createDemoContainer = klass => {
  return [
    container,
    klass,
    {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          var description = m && m.length > 1 ? m[1] : ''
          var content = tokens[idx + 1].content
          var html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
          var script = fetch(content, 'script')
          var style = fetch(content, 'style')
          var descriptionHTML = description ? md.render(description) : ''

          return `<demo-block class="demo-box">
                  <div class="source" slot="source">${html}</div>
                  ${descriptionHTML}
                  <div class="highlight" slot="highlight">`
        }
        return '</div></demo-block>\n'
      }
    }
  ]
}

exports.createContainer = klass => {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info
          .trim()
          .slice(klass.length)
          .trim()
        let _icon
        if (klass === 'info') {
          _icon =
            '<svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="none" style="color: rgb(56, 132, 255);vertical-align: middle;"><g><path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path></g></svg>'
        } else if (klass === 'warning') {
          _icon =
            '<svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="color: rgb(247, 125, 5);vertical-align: middle;"><g><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></g></svg>'
        } else if (klass === 'danger') {
          _icon =
            '<svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="color: rgb(255, 70, 66);vertical-align: middle;"><g><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></g></svg>'
        } else if (klass === 'success') {
          _icon =
            '<svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="color: rgb(38, 203, 124);vertical-align: middle;"><g><path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path><polyline points="23 3 12 14 9 11"></polyline></g></svg>'
        }
        if (token.nesting === 1) {
          return `<div class="sealui-customblock is-${klass}" ${_icon ? 'style="padding-left:3.5rem"' : ''}>${_icon ? '<div class="sealui-customblock__icon">' + _icon + '</div>' : ''}\n`
        } else {
          return `</div>\n`
        }
      }
    }
  ]
}

exports.createVpre = () => {
  return [
    container,
    'v-pre',
    {
      render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`)
    }
  ]
}

exports.createVue = () => {
  return [
    container,
    'vue',
    {
      render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<pre class="vue-container"><code>` : `</code></pre>`)
    }
  ]
}

exports.getAboutSidrsBar = groupA => {
  return [
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: false,
      sidebarDepth: 1,
      children: [['dragonBones', 'DragonBones']]
    },
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: false,
      sidebarDepth: 1,
      children: [['spine', 'Spine'], ['spine', 'Spine']]
    }
  ]
}

exports.getTestSiderBar = (groupTitle, introduction) => {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['', introduction]
        // ['team', '团队'],
      ]
    }
  ]
}


