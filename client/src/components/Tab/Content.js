import React from 'react';
import { Box } from '@mui/system';
import TabMenuConfig from 'components/Tab/TabMenuConfig';
import BtnBox from 'components/common/ButtonBox/BtnBox';

//탭 아래 실제 내용물, TabMenuConfig menu id 참조
const Content = ({ actTab }) => {
  return (
    <Box id="content">
      {TabMenuConfig.map(menu =>{
        const { isSearchShow, isSaveShow, isRefreshShow } = menu.component.props;
        return (
          menu.id === actTab && (
            <React.Fragment key={menu.id}>
              <BtnBox isSearchShow={isSearchShow} isSaveShow={isSaveShow} isRefreshShow={isRefreshShow} />
              <Box sx={{ height: "calc(100vh - 125px)", m: "0px 15px 0px 20px", display: "flex", flexDirection: "column" }}>
                {menu.component}
              </Box>
            </React.Fragment>
          ))
        }
      )}
    </Box>
  );
};

export default Content;
