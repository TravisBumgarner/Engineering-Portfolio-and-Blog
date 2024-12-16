export const makeNewSiteTitle = () => {
    const VALID_FILE_SUFFIX = [
      'proto',
      'test',
      'sample',
      'mockup',
      'demo',
      'final',
      'draft'
    ]
  
    const VALID_FILE_SUFFIX_2 = [
      '',
      '(1)',
      '(2)',
      '3',
      '4',
      '(5)',
      '_final',
      '_v2',
      'v4'
    ]
  
    const VALID_FILE_TYPES = [
      'cpp', // c++
      'css', // css
      'dxf', // dxf
      'html', // html
      'json', // json
      'js', // javascript
      'pde', // processing
      'fig', // figure
      'psd', // photoshop
      'py', // python
      'scss', // scss
      'sh', // shell
      'dng', // dng
      'tsx', // typescript
      'nef', // nef
      'jpeg', // jpeg
      'tiff', // tiff
      'pdf', // pdf,
      'aseprite',
      'sketch',
      'md',
      'mp4'
    ]
    const RANDOM_FILE_TYPE =
      VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)]
    const RANDOM_FILE_SUFIX =
      VALID_FILE_SUFFIX[Math.floor(Math.random() * VALID_FILE_SUFFIX.length)]
    const RANDOM_FILE_SUFFIX_2 =
      VALID_FILE_SUFFIX_2[Math.floor(Math.random() * VALID_FILE_SUFFIX_2.length)]
  
    return `travis_bumgarner_${RANDOM_FILE_SUFIX}${RANDOM_FILE_SUFFIX_2}.${RANDOM_FILE_TYPE}`
  }
  

function random(seed: number) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export function shuffle(array: any[]) {
  let seed = new Date().getDate()

  var m = array.length,
    t,
    i

  while (m) {
    i = Math.floor(random(seed) * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
    ++seed
  }

  return array
}