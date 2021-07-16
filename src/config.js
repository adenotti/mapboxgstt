var config = {
    style: 'mapbox://styles/adenotti/ckr4pk8xw09it17mi4t93oplq',
    accessToken: 'pk.eyJ1IjoiYWRlbm90dGkiLCJhIjoiY2s2bWFlaGRsMGxybjNrcWdxZzFiNmtlcSJ9.tMhZBHKb36OW6uFdsWiiLg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Ethnic diversity in England and our boroughs',
    subtitle: ' The diversity index measures community diversity. It reflects the probability that any two individuals selected at random will belong to a different ethnic group.It takes values between 0 and 1.',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
{
            id: 'England',
            alignment: 'left',
            hidden: false,
            //title: 'Diversity in our boroughs',
            //image: './path/to/image/source.png',
            description: 'The most diverse areas in England are.......',
  location: {
center: [-1.290, 52.988],
zoom: 6.02,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 {
                    layer: 'manchester-outline-4qmrjh',
                     opacity: 0,
                    //duration: 5000
                 },
                 {
                    layer: 'simpson-msoa-newld',
                     opacity: 1,
                    duration: 5000
                 }

            ],
            onChapterExit: [
                 {
                   layer: 'simpson-msoa-newld',
                    opacity: 1
                }
            ]
        },
{
            id: 'Manchester',
            alignment: 'left',
            hidden: false,
            //title: 'Diversity in our boroughs',
            //image: './path/to/image/source.png',
            description: 'Greater Manchester ................',
  location: {
center: [-2.29776, 53.47877],
zoom: 10.02,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
{
                    layer: 'manchester-outline-4qmrjh',
                     opacity: 1,
                    //duration: 5000
                 },
                 {
                    layer: 'simpson-msoa-newld',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                   layer: 'simpson-msoa-newld',
                    opacity: 1
                },
{
                    layer: 'manchester-outline-4qmrjh',
                     opacity: 0,
                    //duration: 5000
                 }
            ]
        },
{
            id: 'London',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './path/to/image/source.png',
            description: 'London is one of the most ethnically diverse areas in England; 18 out of the 20 most diverse local authorities in England are in London',
  location: {
center: [-0.12513, 51.51787],
zoom: 10.00,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'simpson-msoa-newld',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                   layer: 'simpson-msoa-newld',
                    opacity: 0
                }
            ]
        },
        {
            id: 'L&S',
            alignment: 'right',
            hidden: false,
            //title: 'Diversity in our boroughs',
            image: './images/diversity in L&S MSOAs.png',
            description: 'A quarter of the neighbourhoods in Lambeth and Southwark are in the 25% most diverse neighbourhoods in London',
  location: {
center: [-0.09753, 51.45149],
zoom: 11.50,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'simpsons-index-only-ls-7wffxk',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                   layer: 'simpsons-index-only-ls-7wffxk',
                    opacity: 1
                }
            ]
        },
        {
            id: 'Streatham Vale MSOA',
            alignment: 'right',
            hidden: false,
            title: 'The most diverse neighbourhoods in Lambeth and Southwark are Streatham Vale and Brixton North ',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-0.13832, 51.41489],
zoom: 14.00,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                    layer: 'simpsons-index-only-ls-7wffxk',
                     opacity: 1,
                    duration: 5000
                 }],
            onChapterExit: [  {
                   layer: 'simpsons-index-only-ls-7wffxk',
                    opacity: 1
                }]
},
{
            id: 'street level Streatham Vale',
            alignment: 'right',
            hidden: false,
            title: 'Only one in five residents in Streatham Vale are White British ',
            image: './images/Streatham Vale ethnicity.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-0.13832, 51.41489],
zoom: 15.28,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'simpsons-index-only-ls-7wffxk',
                     opacity: 0.2,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                   layer: 'simpsons-index-only-ls-7wffxk',
                    opacity: 0.2
                }
            ]
}

]
          
};
 
