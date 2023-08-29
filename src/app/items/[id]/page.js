import 'src/app/styles/item-page.css'

export default function ItemPage({params}) {
    return (
        <div class='item-page-bound'>
            <div class='item-page-wrapper'>
                {/* <h1>{params.id}</h1> */}
                <div class='item-page-left'>
                    <h1>{params.id}</h1>
                </div>
                <div class='item-page-right'>

                </div>
            </div>
        </div>
    )
  }