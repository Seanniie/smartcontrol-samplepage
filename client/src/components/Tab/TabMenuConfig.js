import Home from "pages/Home";
import SamplePage2 from "pages/SamplePage2";
import SamplePage3 from "pages/SamplePage3";
import SamplePage4 from "pages/SamplePage4";
import SamplePage5 from "pages/SamplePage5";
import SamplePage6 from "pages/SamplePage6";
import SamplePage7 from "pages/SamplePage7";
import SamplePage1 from "pages/SamplePage1";
import SamplePage8 from "pages/SamplePage8";
import SamplePage9 from "pages/SamplePage9";
import Profile from "pages/Profile";

const TabMenuConfig = [
    {id:"Home", component:<Home/>, label: '홈'},
    {id:"Profile", component:<Profile/>, label: '내 정보'},
    {id:"G010101", component:<SamplePage1/>, label: '샘플페이지1'},
    {id:"G010102", component:<SamplePage2/>, label: '샘플페이지2'},
    {id:"G010201", component:<SamplePage3/>, label: '샘플페이지3'},
    {id:"G020101", component:<SamplePage4/>, label: '샘플페이지4'},
    {id:"G020102", component:<SamplePage5/>, label: '샘플페이지5'},
    {id:"C0301", component:<SamplePage6/>, label: '샘플페이지6'},
    {id:"C0302", component:<SamplePage7/>, label: '샘플페이지7'},
    {id:"C0401", component:<SamplePage8/>, label: '샘플페이지8'},
    {id:"C0402", component:<SamplePage9/>, label: '샘플페이지9'},
]
    

export default TabMenuConfig;