const img = document.querySelector(".main__img");

export const width = (screen) => {
    if (screen.width == "1024px") {
        return img.setAttribute("src", "sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450");
    }
}

