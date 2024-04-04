import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ClockIcon } from '../icons/index.page';

const BlockBlogComponent = props => {
  const { post } = props;
  if (post.blogTitle) post.blogTitle = post.blogTitle.replace('　', ' ');

  return (
    <>
      <div className="block-inner">
        <div className="block-image">
          <Link className="block-image-link block-handle-click" href="#">
            <Image alt="" src={post.blogThumnail}className="img-blog" effect="blur" />
          </Link>
        </div>
        <div className="block-text blog-description w-100">
          {!!post.date && (
            <div className="created">
              <ClockIcon />
              <span>{post.date}</span>
            </div>
          )}
          <Link style={{ height: '75px' }} href="#">
            <h4 className="mt-3">{post.blogTitle || 'No title'}</h4>
          </Link>
          <Link href="#">
            <div className="d-flex mt-2 align-items-center">
              <span className="read-more mr-3">Đọc thêm</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlockBlogComponent;
