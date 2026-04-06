import React from 'react';
import { ArcGalleryHero } from './ui/arc-gallery-hero-component';

export default function HeroSection() {
  // An array of Unsplash image URLs related to photography, families, and couples
  const memoryImages = [
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Meekin-2021-10-24-003.jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Crain-2020-01-05-049.jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Crain-2020-01-05-055(pp_w900_h600).jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Hamby-2021-10-22-003(pp_w900_h600).jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3182-pp_gallery/Davis-2021-12-10-006(pp_w900_h600).jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2013/08/03-3182-pp_gallery/Williamson-Newborn-2018-04-10-014(pp_w900_h600).jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/McKenzie-20170319-005(pp_w900_h600).jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Fogel-2021-12-11-014.jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Diego-2020-06-04-031.jpg',
    'http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Lindemann-2019-11-16-022(pp_w900_h600).jpg',
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={memoryImages} />
    </div>
  );
}
