export default function SaveItem(Item) {
    if (Item != null) {
        return localStorage.setItem("cart", JSON.stringify(
            [...JSON.parse(localStorage.getItem("cart")) || [], Item]
        ));
    }
}