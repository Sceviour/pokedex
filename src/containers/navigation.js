import React from 'react';
import Navigation from '../components/navigation';

export default function NavigationContainer({ selectedID, setSelectedID }) {
  return (
    <>
      <Navigation>
        <Navigation.Pane>
          <Navigation.Button onClick={() => {
            if (selectedID > 1) {
              setSelectedID(selectedID - 1)
            }
          }}> Previous
          </Navigation.Button>

          <Navigation.Input
            type="number"
            value={selectedID}
            placeholder={selectedID}
            onChange={(e) => {
              if (parseInt(e.target.value) < 899 && parseInt(e.target.value) > 0) {
                setSelectedID(parseInt(e.target.value))
              }
            }}
          />

          <Navigation.Button onClick={() => {
            if (selectedID < 898) {
              setSelectedID(selectedID + 1)
            }
          }}> Next
          </Navigation.Button>
        </Navigation.Pane>
      </Navigation>
    </>
  );
}
