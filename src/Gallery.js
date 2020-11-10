import React, { Component } from 'react'
import butter from './butter-client'

class Gallery extends Component {
  state = {
    data: {
      fields: {
        gallery: [],
        hero: []
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
      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20" key={fields.id}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{fields.hero.headline}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{fields.hero.sub_headline}</p>
          </div>
          <div className="flex flex-wrap">
            {fields.gallery.map((media, id) => {
              return (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={media.id}>
              <div className="flex relative min-w-full w-full min-h-full">
                <img alt="gallery" className="absolute inset-0 object-cover object-center" src={media.image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1" dangerouslySetInnerHTML={{__html: media.title}} />
                  <h1 className="title-font text-sm font-medium text-white mb-3" dangerouslySetInnerHTML={{__html: media.subtitle}} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{__html: media.description}} />
                </div>
              </div>
            </div>)
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery