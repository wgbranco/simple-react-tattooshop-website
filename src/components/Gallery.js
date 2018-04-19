import React, { Component } from 'react';
import ImagesLoaded from 'react-images-loaded';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { tap, map, mapTo, filter, debounceTime, distinctUntilChanged, withLatestFrom } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { merge } from 'rxjs/observable/merge';
import VisibilitySensor from 'react-visibility-sensor';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryClasses: 'imageGrid loading',
    };
  }

  handleDone = instance => {
    this.setState({'galleryClasses': 'imageGrid loaded'});
  };

  // handleHover = instance => {
  //   console.log('handleHover');
  //   this.setState({'galleryClasses': 'imageGrid loaded'});
  // }

  render() {
    // TODO: Restart animation when hovering for n sec
    //
    // Credits to:
    //    'Detection of hover more than specified seconds with RxJS'
    //    http://blog.tmtk.net/post/2017-01-10-hover-with-rxjs/
    // Adapted into RxJS 5.5.x
    //
    // const gallery = document.querySelectorAll(".imageGrid");
    // console.log(gallery);
    // const enter$ = fromEvent(gallery, "mouseenter");
    // const leave$ = fromEvent(gallery, "mouseleave");
    // const move$  = fromEvent(gallery, "mousemove");
    // const hover$  = move$.pipe(debounceTime(500));
    // const entered$ = merge(
    //   enter$.pipe(mapTo(true)),
    //   leave$.pipe(mapTo(false))
    // );
    // const combined$ = hover$.pipe(
    //   withLatestFrom(entered$),
    //   filter(([e, b]) => b),
    //   tap(([e, b]) => console.log('hover'))
    // ).subscribe(_ => this.handleHover())
    // TODO: unsubscribe combined$

    const listGalleryItems = this.props.listImages.map(
      (item, index) => (
        <GalleryItem
          key={index}
          externalLink={item.externalLink}
          description={item.description}
          srcSmall={item.srcSmall}
          srcMedium={item.srcMedium}
          srcHigh={item.srcHigh}
          srcDefault={item.srcDefault}
        />
      )
    );

    function GalleryItem(props) {
      return (
        <a href={props.externalLink} target="_blank">
          <img
            alt={props.description}
            srcSet={
              props.srcSmall + " 640w," +
              props.srcMedium + " 750w," +
              props.srcHigh + " 1080w"
            }
            src={props.srcDefault}
          />
        </a>
      );
    }

    return (
      <section className="Gallery">

        <VisibilitySensor
          partialVisibility="top"
          intervalCheck={false}
          scrollCheck={true}
          scrollDelay={150}
          onChange={this.props.onScroll}>

            <ImagesLoaded
              id={this.props.sectionId}
              className={this.state.galleryClasses}
              done={this.handleDone}>
              {listGalleryItems}
            </ImagesLoaded>

        </VisibilitySensor>

      </section>
    );
  }
}

export default Gallery;
