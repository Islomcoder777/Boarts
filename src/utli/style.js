export const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
    container: 'xl:max-w-[1280px] w-full',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',
    flexBetween: 'flex justify-evenly items-center',
    paragraph: 'font-montserrat font-normal  sm:text-[18px] text-[12px] sm:leading-[30.8px] leading-[10px]',
    heading1: 'font-montserrat font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
    heading2: 'font-montserrat font-semibold xs:text-[48px] sm:text-[40px] text-[20px]  xs:leading-[76.8px] leading-[66.8px] w-full'
}; 

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectiomReverse: `flex mb:flex-row  ${styles.paddingX}`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionimg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 relative`,
    sectionimgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`
}
// flex-col-reverse 2 