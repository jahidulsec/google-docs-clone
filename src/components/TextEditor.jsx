import React, { useCallback, useEffect, useRef } from 'react'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'

// Quill JS is a build in librery of text editor


// Add fonts to whitelist
var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
var fonts = ['Roboto','Merriweather', 'Lobster', 'Prata']
Font.whitelist = fonts;
Quill.register(Font, true);




// adding font size option
const fontSizeArr = ['8px','9px','10px','12px','14px','16px','20px','24px','32px','42px','54px','68px','84px','98px'];

var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);



const TOOLBAR_OPTIONS = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': fonts }],
    [{ 'size': fontSizeArr }],                      // custom dropdown
    ['bold', 'italic', 'underline', 'strike',       // toggled buttons
    { 'color': [] }, { 'background': [] }],        // dropdown with defaults from theme
    
     ['link','image','blockquote', 'code-block'],
     [{ 'align': [] },{ 'list': 'ordered'}, { 'list': 'bullet' },
     { 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'direction': 'rtl' }],                         // text direction



    ['clean']  
]

const TextEditor = () => {  

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(
            editor, {
                theme: 'snow',
                placeholder: 'Type @ to insert',
                modules: {toolbar: TOOLBAR_OPTIONS}
            })
    },[])

  return (
    <div 
        className='container'
        ref={wrapperRef}
    ></div>
  )
}

export default TextEditor