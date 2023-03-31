import React from 'react';
import { Box } from '@mui/system';
import TabMenuConfig from 'components/Tab/TabMenuConfig';

//탭 아래 실제 내용물, TabMenuConfig menu id 참조
const Content = ({actTab}) => {
  return (
    <>
      {TabMenuConfig.map((menu) => {
        if (menu.id === actTab) {
            return (
              <Box key={menu.id} sx={{width:'100%'}}>
                <div>
                  <Box sx={{height:'calc(100vh - 125px)', m:'0px 15px 0px 20px', display:'flex', flexDirection:'column'}}>
                    {menu.component}
                  </Box>
                </div>
              </Box>
            )
        }
        return null;
      })}
    </>
  );
}

export default Content;
