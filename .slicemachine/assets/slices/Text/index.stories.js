import MyComponent from '../../../../slices/Text';

export default {
  title: 'slices/Text'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Enim laboris veniam excepteur adipisicing velit deserunt esse incididunt do elit in officia.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _TextWithLink = () => <MyComponent slice={{"variation":"textWithLink","name":"Text With Link","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Exercitation aute ipsum eiusmod aute nostrud. Eu sunt sunt velit veniam duis.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_TextWithLink"}} />
_TextWithLink.storyName = 'Text With Link'
