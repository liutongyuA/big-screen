     // 浏览器宽高
      const deviceWidth=document.documentElement.clientWidth
      const deviceHeight=document.documentElement.clientHeight
      const pageWidth = deviceWidth / deviceHeight > 16 / 9 ?  deviceHeight * (16/9) : deviceWidth 
      const pageHeight = pageWidth / (16/9) 
      const str = `<style>html{font-size:${pageWidth/100}px}</style>`
      document.write(str)
      window.pageWidth = pageWidth
      export {pageWidth,pageHeight,deviceHeight}