AFRAME.registerComponent("cursor-listener", {
    schema : {
        selectedItemId : {type : "string", default : ""}
    },

    init : function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handleMouseEnterEvents : function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleComicsList()
        })
    },

    handleMouseLeaveEvents : function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if (id == selectedItemId){
                    el.setAttribute("material", {color : "white", opacity : 1})
                }
            }
        })
    },

    handleComicsList : function(){
        const id = this.el.getAttribute("id")
        const comicsId = ["amazingspider-man", "captain-america", "outer-space", "super-man"]
        if (comicsId.includes(id)){
            const comicsContainer = document.querySelector("#posters-container")
            comicsContainer.setAttribute("cursor-listener", {selectedItem : id})
            this.el.setAttribute("material", {color : "#d76330", opacity : 1})
        }
    }
})