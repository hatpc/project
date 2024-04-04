import React from 'react';
import { Form } from 'react-bootstrap';
import { ResetIcon, SearchIcon } from '../../icons/index.page';

const SearchResidence = () => {

  return (
    <>
      <div className="tab-content" id="searchFormContent">
        <div className="tab-pane fade show active" id="Residence" role="tabpanel">
          <Form>
            <div className="group-control">
              <div className="row align-items-end">
                <div className="col-6 mb-1">
                  <div className="text-left mb-1">
                    <label>Từ khóa:</label>
                  </div>
                  <input type="text" name="keywork" className='form-control' placeholder="Tìm kiếm sản phẩm mong muốn..."  />
                </div>
                <div className="col-6 mb-1 input-typetext ">
                  <div className="text-left mb-1">
                    <label>Giá bán:</label>
                  </div>
                  <input type="text" name="keywork" className='form-control' placeholder="Tìm kiếm sản phẩm mong muốn..."  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 d-flex btn-search-home justify-content-end">
                  <button className="btn-submit-home mx-0">
                    <SearchIcon />Search
                  </button>
                  <button className="btn-reset-home ml-3 mr-0">
                    <ResetIcon />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SearchResidence;

