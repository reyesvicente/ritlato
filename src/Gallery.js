import React, { Component } from 'react'
import butter from './butter-client'
import {Helmet} from 'react-helmet'


class Gallery extends Component {
  state = {
    data: {
      fields: {
        gallery: [],
        hero: [],
        open_graph: [],
        seo: [],
        twitter_card: []
      }
    }
  }
  async componentDidMount () {
    const resp = await butter.page.retrieve('*', 'ritlato')
    this.setState(resp.data)
  }
  render () {
    const { fields } = this.state.data
    return (
      <div>
        <Helmet>
          <title>{fields.seo.title}</title>
          <meta name="subject" content={fields.seo.title} />
          <meta name="description" content={fields.seo.meta_description} />
          <meta name="copyright"content="Vicente G. Reyes" />
          <meta name="language" content="EN" />
          <meta name="robots" content="index,follow" />
          <meta name="og:title" content={fields.open_graph.title}/>
          <meta property='og:image' content={fields.open_graph.image} />
          <meta name="og:description" content={fields.open_graph.Description}/>
          <meta name="og:title" content={fields.twitter_card.title}/>
          <meta property='og:image' content={fields.twitter_card.image} />
          <meta name="og:description" content={fields.twitter_card.Description}/>
        </Helmet>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20" key={fields.id}>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{fields.hero.headline}</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{fields.hero.sub_headline}</p>
            </div>
            <div className="flex flex-wrap">
              {fields.gallery.map((media) => {
                return (
              <div className="w-full lg:w-1/3 sm:w-full md:w-1/2 p-4" key={media.id}>
                <div className="flex relative">
                  <img alt={media.title} className="absolute inset-0 w-full h-full object-scale-down object-center" src={media.image} />
                  <div className="box-border px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 w-64 h-64 min-h-56 max-h-full min-w-56 max-w-full">
                    <h1 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1" dangerouslySetInnerHTML={{ __html: media.title }} />
                    <h2 className="title-font text-sm font-medium text-white mb-3" dangerouslySetInnerHTML={{__html: media.subtitle}} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: media.description }} />
                  </div>
                </div>
              </div>)
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Gallery