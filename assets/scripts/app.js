const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: 'html',
        weight: 12.3,
      },
      {
        text: 'css3',
        weight: 8,
      },
      {
        text: 'javascript',
        weight: 14,
      },
      {
        text: 'programming',
        weight: 7,
      },
      {
        text: 'java',
        weight: 9,
      },
      {
        text: 'react native',
        weight: 15,
      },
      {
        text: 'kotlin',
        weight: 7,
      },
      {
        text: 'php',
        weight: 7,
      },
      {
        text: 'node',
        weight: 7,
      },
      {
        text: 'ionic',
        weight: 7,
      },
    ]
    return words
  }

  function makeWordCloud(words) {
    $('.teaching-domains').jQCloud(words, { delay: 120 })
  }

  function displayWordCloud() {
    var count = 1
    $(window).on('scroll', function () {
      var y_scroll_pos = window.pageYOffset
      var scroll_pos_test = 2700 // set to whatever you want it to be
      var words = makeWords()
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words)
        count++
      }
    })
  }

  function designForm() {
    $('#my-modal form').addClass('my-form')
  }

  function typeAnimation() {
    Typed.new('#writing-text', {
      strings: [
        'I am seriousely studying to become Full-Stack Developer. come the beginning of 2022',
        'love everything about code.',
        'also teach programming to people.',
        'solve problems.',
        'More so, I am a tech evangelist and I will preach it to death.',
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: 'text',
      callback: function () {
        $('#writing-text').css({ color: '#fff', 'background-color': '#C8412B' })
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    })
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  }
})()

Portfolio.displayWordCloud()
Portfolio.typeAnimation()
