import { useState } from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import NewExtractModal from '../../newExtractModal';

export default function StepTwo({ description }) {
  const [isOpen, setModals] = useState(false);
  const [nameLayout, setNameLayout] = useState('Aetna');
  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <>
      <div className="tab-new-extract-info">
        <span> Interface ID</span>
        <div>IF(145) - BODY extraction</div>
      </div>
      <div className="tab-new-extract-description">
        <span> Extract Description</span>
        <div>{description}</div>
      </div>

      <div className="new-extract-selector">
        <div>
          <span>The following parameters are required</span>
        </div>
        <div className="new-extract-parameter">* File Layout</div>
        <div>
          <div className="new-extract-choose-parameter">
            <div>Extract Parameter</div>
            <UncontrolledDropdown direction="up">
              <DropdownToggle style={{ backgroundColor: '#b3d69c', marginLeft: '5px' }} caret>
                File Layout
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="new-extract-choose-parameter">
            <div>File Layout</div>
            <div className="new-extract-search-box">
              <input value={nameLayout} onChange={(e) => setNameLayout(e.target.value)}></input>
              <Button onClick={openModal} style={{ backgroundColor: 'white' }}>
                🔍
              </Button>
            </div>
          </div>
          <div className="new-extract-info-button">
            <div className="tab-new-extract-button">
              <Button>Save</Button>
            </div>
            <div className="tab-new-extract-button">
              <Button>Ignore</Button>
            </div>
          </div>
        </div>
      </div>
      <NewExtractModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
