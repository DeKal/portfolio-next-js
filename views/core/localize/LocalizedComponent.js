import React from 'react'
import PropTypes from 'prop-types'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize } from 'react-localize-redux'
import enTrans from '~/public/translations/en.json'
import vnTrans from '~/public/translations/vn.json'
import { EN } from '~/views/home/consts/langs'

const defaultLanguage = EN

class LocalizedComponent extends React.Component {
  constructor(props) {
    super(props)

    const languages = ['en', 'vn']

    this.props.initialize({
      languages,
      options: {
        renderToStaticMarkup,
        defaultLanguage,
        renderInnerHtml: true
      }
    })

    this.props.addTranslationForLanguage(enTrans, 'en')
    this.props.addTranslationForLanguage(vnTrans, 'vn')
  }

  render() {
    return this.props.children
  }

  componentDidMount() {
    const lang = window.localStorage.getItem('lang') || defaultLanguage
    this.props.setActiveLanguage(lang)
  }
}

LocalizedComponent.propTypes = {
  initialize: PropTypes.func,
  addTranslationForLanguage: PropTypes.func,
  children: PropTypes.element,
  setActiveLanguage: PropTypes.func
}

export default withLocalize(LocalizedComponent)
