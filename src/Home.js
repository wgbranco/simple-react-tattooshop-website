import React, { Component } from 'react';
import './Home.css';
import HeaderComponent from './components/HeaderComponent';
import Gallery from './components/Gallery';
import Info from './components/Info';
import FooterComponent from './components/FooterComponent';

class Home extends Component {

  constructor(props) {
    super(props);

    this.title = 'NewSkin Tattoo';

    this.galleryId = 'gallery';
    this.infoId = 'info';

    this.options = [
      {label: 'Galeria', sectionId: this.galleryId, active: false},
      {label: 'Contato', sectionId: this.infoId, active: false},
    ];

    this.state = {
      options: this.options,
    };
  }

  render() {

    const listImages = [
      {
        externalLink:'https://www.instagram.com/p/BJvecvigWxM',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/98aeb2996c62e793f6c1e8e7f73286b2/5B454428/t51.2885-15/sh0.08/e35/p640x640/14156199_507707812766189_1887673103_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/0b85bbdafc7a1a0881931bbcb0998f56/5B53E3C9/t51.2885-15/sh0.08/e35/p750x750/14156199_507707812766189_1887673103_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/5b868648d1a9faab7d5582350aaff719/5B3ECCB6/t51.2885-15/e35/14156199_507707812766189_1887673103_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/5b868648d1a9faab7d5582350aaff719/5B3ECCB6/t51.2885-15/e35/14156199_507707812766189_1887673103_n.jpg'
      },
      {
        externalLink:'https://www.instagram.com/p/BFWtinLBbZ9',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/0c8b010e57b3eeb68ddd21a65c7490bf/5B3CAC4D/t51.2885-15/s640x640/sh0.08/e35/13126783_271349979865339_309050700_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/d1b538723524b74fc4b92ad6671651f0/5B472989/t51.2885-15/s750x750/sh0.08/e35/13126783_271349979865339_309050700_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/a9d6bbf9ad4bf816a621c7e65c4ba462/5B474FFB/t51.2885-15/e35/13126783_271349979865339_309050700_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/a9d6bbf9ad4bf816a621c7e65c4ba462/5B474FFB/t51.2885-15/e35/13126783_271349979865339_309050700_n.jpg'
      },
      {
        externalLink:'https://www.instagram.com/p/BGN_a8VBbYm',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/6dbb52d8a7f055e72942d8f4d84af90d/5B3A2AA2/t51.2885-15/sh0.08/e35/p640x640/13277647_840034529462074_1370881606_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/82415feb2cfb2e8cbfbcdaaeab331a99/5B4F2D43/t51.2885-15/sh0.08/e35/p750x750/13277647_840034529462074_1370881606_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/ea55da34ed2fc1080ce2b9bf36d1fa14/5B39613C/t51.2885-15/e35/13277647_840034529462074_1370881606_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/ea55da34ed2fc1080ce2b9bf36d1fa14/5B39613C/t51.2885-15/e35/13277647_840034529462074_1370881606_n.jpg'
      },
      {
        externalLink:'https://www.instagram.com/p/BeHO8RXAcqG',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/f51926e026c10e1e1045bee9420106e2/5B405A62/t51.2885-15/s640x640/sh0.08/e35/26158429_1560084834067863_5267142334679613440_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/96e5495ba5c733681f455de1d97be54a/5B52408C/t51.2885-15/s750x750/sh0.08/e35/26158429_1560084834067863_5267142334679613440_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/738eef8d26cbada0ca3d2cdccab3ac66/5B3B0F48/t51.2885-15/e35/26158429_1560084834067863_5267142334679613440_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/738eef8d26cbada0ca3d2cdccab3ac66/5B3B0F48/t51.2885-15/e35/26158429_1560084834067863_5267142334679613440_n.jpg'
      },
      {
        externalLink:'https://www.instagram.com/p/BEkPgF1Bbaa',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/a6776d3d9ab42f3c41f57941a5a53d57/5B51D36D/t51.2885-15/s640x640/sh0.08/e35/12965637_1738717753065874_1892714208_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/36bb6a38199c10465de3c041b808cb08/5B45C86E/t51.2885-15/s750x750/sh0.08/e35/12965637_1738717753065874_1892714208_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/a3b831b22cbd938fd5a9967f4b78c753/5B4791A0/t51.2885-15/e35/12965637_1738717753065874_1892714208_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/a3b831b22cbd938fd5a9967f4b78c753/5B4791A0/t51.2885-15/e35/12965637_1738717753065874_1892714208_n.jpg'
      },
      {
        externalLink:'https://www.instagram.com/p/BcFWHtXg_1c',
        description:'',
        srcSmall:'https://scontent-lga3-1.cdninstagram.com/vp/10a1fedd5890e722f6b578426117f34d/5B70014D/t51.2885-15/s640x640/sh0.08/e35/24175452_1969605156698445_1323267621327470592_n.jpg',
        srcMedium:'https://scontent-lga3-1.cdninstagram.com/vp/9b142f9633b342111774c35b50c4bde6/5B5282A3/t51.2885-15/s750x750/sh0.08/e35/24175452_1969605156698445_1323267621327470592_n.jpg',
        srcHigh:'https://scontent-lga3-1.cdninstagram.com/vp/50f82033b1948c8aeed66faa878080e5/5B32C267/t51.2885-15/e35/24175452_1969605156698445_1323267621327470592_n.jpg',
        srcDefault:'https://scontent-lga3-1.cdninstagram.com/vp/50f82033b1948c8aeed66faa878080e5/5B32C267/t51.2885-15/e35/24175452_1969605156698445_1323267621327470592_n.jpg'
      }
    ];

    const onChangeSectionVisibility = (sectionId) => (isVisible) => {
      let option = this.options.filter((item) => item.sectionId === sectionId);

      if (option && option[0] && (option[0].active !== isVisible))
      {
        option[0].active = isVisible;
        this.setState({ options: this.options });
      }
    };

    return (
      <div className="Home">
        <HeaderComponent
          title={this.title}
          navOptions={this.state.options}/>

        <main>
          <Gallery
            sectionId={this.galleryId}
            listImages={listImages}
            onScroll={onChangeSectionVisibility(this.galleryId)}
          />

          <Info
            sectionId={this.infoId}
            onScroll={onChangeSectionVisibility(this.infoId)}
          />
        </main>

        <FooterComponent/>
      </div>
    );
  }
}

export default Home;
