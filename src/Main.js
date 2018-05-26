import React from 'react';
import { connect } from 'unistore/react';
import actions from './actions/actions';

import Card from './components/Card';

import './App.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    nr: 0,
                    name: 'josh',
                    location: 'cell 12.34',
                    photo:
                        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFRcXGRgVGB0VFhcXFxUXGBUXGhcZHSggGBsnHRcWITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0mICUtLS0tLS0tLS0vLS0tLS0tLS0tLy0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAwQHAgj/xABFEAABAwEEBgYGCQMDAwUAAAABAAIDEQQSITEFBkFRYYEHEyJxkaEyQlKxwfAUI1NikqLR0uEVQ3KCk/EzY7IXJESD4v/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgQFAwb/xAAqEQACAwACAgECBAcAAAAAAAAAAQIDERIxBCFBIlEFE3GhFFJhgbHR8P/aAAwDAQACEQMRAD8A7VbbWyJhkkcGtaMT8BvPBc901rlNISIT1TNlPTPEu2cvEo160sZJupaexFhTe/1jyy8d6rKzfI8ht8Y9G14fhxUVOa1v9jJLM5xq9znHe4lx814QmqhpdAkhJAAhCaQAgppJgCSEIAE0BaukNJRQgX3UrkAKk0zw3JqLk8RGUlFa2bSFr2G2slbejdUZHYQdxCzpNNPGNNNagTQgBIYBBQShMASQmkAKP04fqjxI99fgpAKK1if2Gj71fAfypR7RCx/SyGgtT2Gsb3sO9ji0+LSrjq10k2mBwbaCZ4ttf+q0bw71u52e8KkIVuMnHoz5QjJY0fS+jNIRWiJs0Lw+NwqCPMEZgg4EFC4/0VawOgtIs7j9VOaU2Nlp2XDvpdO/s7kK7XPmtMu6v8uWBPIXOc85ucXHvJJPvXhCaxj0/R5TSTA+eX8J9kehITohIkCaEkACSEJACjNKaeggwc68/wBhmLuexvNQms+spBMMBxGD3jYdrWn3nYqc4/yd6vUeJyXKZm+T5/B8a/b+5bbVrhIRWFjG/wCfaPkQAfFV/SOlppnXpCKgUwFKDE5c1pMfQrZEN/EVrvpgTUYUG3tDFX4VQh0jLsvssWSZm0bpuaAnqy3tUreFRhWnvU3ZNd3jCWJpG9hLT4OrXxVUcKYHYgBKdMJ+5Idfk21+os6horTcE+Eb+17Luy7w28qqRJXH79MiRTGowNd/BXPVfWYvIhnPaODXn1jsa7juO3vzo3+I4rlDo0/G89TfGz0y2pITVE0gQgBBKAEoLWJ/aYNwJ8T/AAp1V7Srb8jiNlAN2ANcdn8jeuta1nC58Y4RqEJgLsVTLY5ix7JBmx7Xjva4OHuQsRKFJSa6IyhGXZdEkJKkaYJhJNMD1Sq8goKENkUsBJCEiQKD1t0qYYrrD9ZJUD7rR6TvOnPgpmeZrGlzjQAVJXOtY7WZ5nPb6Ao1uzAcNmNSrXi1c56+kUvNv/LrxP2/+0hydg+f4SWTqHfJR1DvkrXMAxrJBKWmo5jeNoT6h3yUCzu4d9cEAZ5Y2vbfGFAK1LcTjhTDHJarsMPmqyGB2Q9+dEuod8lAGJCydQ75KfUO+SgDoWqmlevho4/WM7LuPsu5jzBU2AucasWowThzsGFpa/bQZg0GeIHiV0WOQOAc01BFQRtB2rH8qrhP10z0HhX/AJlePtHolCElWLgnOoKnIYqo9cbxdvJJ5qx6YluxO49nxz8qqsgLtUvkq3v2kZpWgi8Dmcvfsw+eeElBSXUrpAhCEDLmhCaqGiCaEkwBJCEgBMISTSE3hAa5z0iYwes6p4ho/UjwVKbk7vcrvrfo2V0bJmsPVsD7zsgBhtOeRVJaMCN5PmtbxGlWjC85SdzeevQnZN72r0fSHcfeFlbZqtHaaKEZnHBZBY6mt+PI+srWlLDXiGLu/wCAXhx+roMsOeK3BZc+3HQn2uC8fQjdu34/xcUtQYYH+k3n7kN9I9w+K2XWSpBvx4V9bggWTEm/HjT1t1Uagw0x6Dv9XvK9uHo949yzixdki/Ht9bee5ZbRZgQC1zagjAGpPAYI0MNQntcvirxqnPegp7Di3lg4f+Sox9KvCnmr1qlYZG2frHNIbI6800wIoBn3gqr5jTr/ALl/8PUlb18EwmhImgqcgso3CD0/LVzWbAKnvOXl71EkrJap773O3ny2eSxKxFYsKE5cpNghCFIiCF6bhihAnpck0gUKqaQJIQkAJoQUABW1oyy9ZI1hyzPcMVqqR1fkpO3iCPKvwTXZCfqLNzXNhFgtDRkYwAAK4XmjL4Li9iiaZGMe640yNa92d0FwDnbsBU8l37S1iE0EkXtsc0cCRgfFcrsur30qwl8bSLRBJKyRlKucMDcyFXDZwqNy0PGml2Y18W16LlF0dWEChbI7iZCP/GgXp3R7YKUuSD/7HfFRWomuTbrbLanXXt7LJHHBwGAY47HDIE59+fQFzslbB42yUI1zWpI5tpzo0o0uskhcRj1clKng14AFeBHMLn7LO8vEYaS8uuXadq9Wl2m+uC7pp/WCCyMLpXitOywHtvO4DdxOAXOdRY32rSRtLm4Nc+V9PRBeHBjfF2H+JKsU2z4OUukcLa48kolTdY5BJ1Nx3WXrlynavVpSi6FoXoyF0OtUpr7EVKDgXkGp7hzK0NdA+yaUbaw2rXXJBXIlrBHIyu+gr/qC6HoTTcFqZfheDvacHsO5zdnfkdiV10+KcemFVUOTUuyG/wDT2wZXJP8AccvEvR7YaGnWMwzEhNO8OqKK2lc31+1xa9pslldevdmR7cQa4dWynpVyJHcK1w4VytnLE2drI1wWtIostmDrxYSQDQO3jEBzt1aD8S650ftD9GwtcKgteKHd1j1UbfoQ2LRZL2/+4nliF3MijrzYxTbQOOG08AuhaEshggiiObGNDqY9qlXEHbjVdPImpr0FEXBeys2uz3HuZ7Jpy2eVFEadtN2O6M3Yctv6c1OaXkvTPP3qeAA+Cpek7T1khIyGA7htVKC1mrOeQ/qzUQhC7lQEwEAIJQAEoSQgC6JIQqhogmhCABCEkAC9wyFrg4ZggjkvKAEwLzZLQ2Roe3I+R2grDZdGxRySSRsuvlIdIQTRzgKA3SaA440ArtqqXNO9sb7j3N7LvRJGNDQ4J6o9IccjWxWxwjkFAJDhG/i45Md5d2S7QTkm0Z9sODJLWjUaG1EyMPVSnMgVY/8Aybv4jHfVVUapaXjHVxzG5l2LQ5racAaEeC6o1wIqDUHaMQe4r0usb5xWd/qVpUxb05fo/o1tD3XrTM1oJxuEySHvc4AA8e0uhaH0TDZoxFCy63MnNzj7TjtK0dKa3WKCoknaXD1Y/rHcw2tOdFXJ+lOAGjLPK4b3FrfIEpylbZ30EK4Q6LlpfRcNpjMUzLzcxsLTsc07Cue2/o2tEbr9lnaaZXyYpG9zmgg/lUtY+k+yuNJI5Y+NA8flNfJWrRml7PaBWCZkg2hp7Q72nFvMJRnZV+g51xn2c4fqjpeUXJJSWf8AcnLmcwKk+CtmqupENlIkeetmGTiKNZ/g3f8AeOO6itSwWy2RxMMkr2xsGbnENHntRK+cln+BRpjF6eLZo2KV0b5GXjE6+ypNGu9qgNCe8GiekbWImFxzyA3nYuca1dIjpPqbFVrSaGUijjXYwHFv+Rx4DNSk85OL3E0GbiTQc1ymnFLS1TWpv9CO01a7rCK9p9R+4/O9VpbFvtJkeXbMgNw2fqtdShHESsnyYJgIpvQSpHMCUkIQAIQhAFzTQhVDREmkm1tVLsj0JNCAEiQAIJQShACIrguWzxXXOYfVcW+Bp8F1JVLWzQ5qZ2CoPpgbCPW7t/irHjzSeP5K3kwco6vggLHpCaLCKaSMbmPcweANF7tWk7RKCJJ5XjaHyOcPAmi1AEEq7iM824LMZi1kTavcaBo2mhw4YDuoFZ7N0aW1wBc6BnBz3E/lYR5qM1H0rDZrV1s9boieBdF4hxu0w7g4c1ch0lNNers5I++9rPEAGmzz3UXObnuRQ1i7ISXowtgFWyWd3C88HzZRVC12aSCVzHgskjdQ0NC08CPGo3roLOlU17VjoNtJcfAxhUzWbSbbVapbQ1pY15bQGl6jWNbjTCuCIOe/UN58Hqz6zW5ooLXMBxeXcgXVKj7bbZJXXpZHyHYXuLiO6pwWAlJdMSIm7oWz3542/eBPc3tH3K36dtv9tve74D4qM0LZPo8ZmePrHijGnYM6keB8N6wucSanEnFVbGpS37FqOwhnyxJjegBBKRE9kVy+cljTBWcRhwJGfDuwFN+B8txT7F0a6EJgJDABCRKEAXRCElUNEEJoATA9HHHh8f5XmqChDeiSwEkISGNFFI2XQNqkF5kDyKVxo2vdfIqqzpjTJszrk1mnjNaDrG9WD3E+lyXWNNkukcZ+RVHuSI3TOqxeb1mbif7Y2n7vHh4blUnsIJa4EEGhBFCCMwQcQV1XUPSbLTM7C46Nt4NJreBq0nlUfiCsGsWqtmtgrI26+lBIzB/Cuxw4HlRWI2Sh9MylY4Te19HCF7jkLTUK16a6PbZCSYwJ2b2YPA4xk1/CSqrPA5hpI1zDueC0+DlYUk+jk0Z5Lrm3qgHsimO7Gue4081qkrLZrO+U0iY553MaX+4K16E6OrXKQZqWdn3u1IRwYDh/qI7kSkl2JIqEbC4hrQSTkBiTyVr0RoJsI660UvDENzDTsrvd5BdH0Xq1ZLHE+6KVYb8smL6UxJOwcBQLlM+sDrS+7HDI9oNGhgvHg4imBPHJcW52+oL0dYzrr9z7+DbtlpMji48huG5YQFvM0NaLoeYiPu1aXeAJWlI0g0cCDuIpTkoODj2iSsU/aeiJSQhIYL011PnBeUwEAZZi047STs2bNueOawkoQgEsBCEIAuaaEAKoaIAIJQShMASQt3Q+j3TzMibhU4n2Wj0j4edEJNvEKUlFayD0tpZkAxxccmjM8TuHFaurXSFJZpC59mhlaTXGrZGD7j8fCmO8K99IHRe2domsQDJmtDSwmjZQ0UGJ9GSm3I7aZjjdsszmOdHJG6ORpo5jmkOBxABB2UAxyWvT48YLX7ZgeR5k7Xi9L7f7O+6E6UNG2igdKbO/2ZxcH+5Us81bQYpmepIxw4PaR5gr5JcKYLNYrZJCb0Mj4jtMbywnvukVVjCmfSzNS7A2QTRWZkMgBAdEOrHaFDVjaNcO8blqTwlji12Y8+K4zYekfSkWVqLxukax/mW3vNSrOli2Op18Nne0HNjXxvptAN8jyVe+jmtXZ3pt4PH0dNSc0HMA9+K0NCaahtUfWQuqMnNODmHc4bPcdikFmtNPGaCaa1CAAywXmR4ALnGgGJJyC82idrGl7yGtG0rlOuWv993V2eha07cW4b6HtHnQcVOuuU3iIWWKC9lv0lbPpNWkfU5XXDB/FwOY4LCxrGNwDWNG6jQPgFy6bWy2Ox626NzGtaDwyrTmtC1TunoXvc4/eJcK0GOJw25LUrrUFiM2c3N6zo+kdbrJF/c6x26Ltfm9EeKp2nNb5J+y2NkbQcCe2/8AERRvcBzVbIXqKMuIa0FziaAAVJPABTxMinntE5YdJh/Zd2XeR/QqQUpqpqj1ZE1oAMgxazMM4u3u8hx2ZdYdHNiIkbQNeaXcu1QnAbqAqndTnuJfo8jl9MiHASJQShVi4CEIQAwEJjBCPQnpcgEEoBQqppAkhNIAUPb9Z57HaY3WdwBYKvBFWvDvUcNowrvyOxTLW1yUJ0maozWOUTGr4ZLtH+xJdAcx27KrTtGGYVzw4cp6/gz/AMRs418fuWXWjpTM1ijfY5XWa09c0SRkNeblx9S0vaWuZeu4gA5VAqufaY1gtdqu/SZ+tLfRLoomuG8B7GB1DurRQpWanD3LTZhmxHZw8Z0IG/HPM1zGNeR4LWdBQ0NV7Y6hqBiFnfcc2tKEXQABw245YfrxWgawh4pGPivTu5KnD3I0DPYLVLA8SQyOjeNrd24g4OHAghSrtctID/5bv9uL9igHPGwLFyScU+0SUpLpknpTT1qtDbs873t3Ua0c7gFeaihZm7f+VkA2kfykTwQkl0DbfZjMATbCB87165I5JiNhtkY9pNBXhWowNBTbl57KFOwWuSAnqnXCcCbrS7uq5pIHBYGupkPIHPgc1nnexwrSji41wGA5HHPOmxAEzovXCWMuNocZG3TdFAHXqimIAAGda1yVd0rpmW0S9a84j0Wj0WDcPidvgte0n3qS1X0E61SYgiJpF92/bcHE+Qx3KS6ESUZJa1xBF5rXAHc4VBXpWPWiyC6yQCl3sGmxvq+GXNVxZtkeMsNemfOCYL1kjJeVA6AhCEAXRJCaqGiCAEBBKANrRVphjnifO8RxCRtXOyBr2a7heugnIZ5BddtlljmjdHI1skb20c1wq1wK+dddJ6MjZ7TieTR/+gtnUjpHtFhAikBnswwDCaPjH/bcdn3DhuLVq+HDK9+5hfiM+VufZGfpM1BbYA2eGSsD5LgY/F7HFrnUves2jTiccs81SK/e9y6n0qa1WS3aPhdZ5Q4i0tLo3dmRn1co7TDjSu0VHFcuAPBWSgIU9r3JF3H3Jvk7lidIUAe3PHte5YnPrtSxQgYua9DeT/KKUzQSUAInilXimhAC5o5ppjeUAA3kpE8UElCAN3V/RTbTOI3uIbQuN3MgEYV2VrmunWSysjYGRtDWgYAZfPFc31W0hHBOZJXXWiNwyJJJLaAAZnBetP63S2j6uIGKM4Z9t9djiPRHAeKaEyU1m1ma+RtniILA6kjhk47Gg7gaEneBxWrkqi00xGYy3YbVa2OqAd4B8RVVfKj7TL/hy9OI0IQqpcBCEIAuiKIPHBYJLZGM3t8QquGg3hmTUfJpeIbSe4frRYRpkGt1v4jTdjQcK+CmoNnN2Rj8nR9D6qwW3RxinaaPkc9rxg+Nw7Ac07PROGRBNcFx/XHU+06OfSYXoiaMmb6DuB9h3A8iVZtAdJUl0WWV/wBHuktaQLrXCpIJccWONd9Pcpqc9ZW+b4IxvdqoPfmtmqPCKR5y6fOxy+7ONtlB+fJZHyV3jxVj1x0DDC1ssQLKvulgPYxBNQDll3KtKTIC8UeKaEgF4r0N/wAlAG0/8pEoAzmjwNh+cfH534CO9AJG1bcTA8HEVw2EEAV3YHZnxyogDT8UeK9OBGBQBtKAAAZlInvQTxQgBeKPFNCANa0Zc1ibUEUzOQpU44ZKZ0Non6TL1V+5gXVpewBGyueK6BofV2z2fFjav2vf2n8abG8qKSEVzQOqV8tmtLaDMRnbuv8ADLDbtpksmnW0nf3g+LQrXpG3xQsvyvDW8cydwGZPAKnSaRZanPkYCO0AA6gdg1oBONBXHfs404eQtgWfFlkzWQhesu/3fyqJpBl3+7+ULyhAGe3Qlkj4zmx7mHva4tPuWBXrpX1edDaPpLB9VMcSPVlp2gf8gLw43lRVKUeLwjCSlFNAvMjyASMwCR3gL0mB8/BRRJlbdIxzMaAgAAAd9Tnl7vft6K1htFnwjkqweo8Xmchm3kQrlb9TrNO0SQ1hLgCLuLMR7By5EKr6Q1OtcdSGCVu+M1NOLTQ+FVq6Yhtaa1oFqhawxlj2vDjjeaRRwwOBriMKKF5LWZG5ri1zS11MnAtPgcVspMYcl6A2kfygAZn/AJSJSACeCXJCEAHJemuIxC8r0AMygDYlka4VI7RO4YCnDPn/AM6x7kE8UkAHJHJCEAHJeqU2Yoy715rxQBJ6s6Sjs85llJDbjhgC4kktoKDuK39Ka+vOFnjDB7T+07k0YDmT3Kq2j4re0fq1a5fRhLR7UnYHnieQUkIj7XapJXX5Hue7e415DcOAUnq5IRfodrfj+is2jNQmDG0SF59lnZbzd6R5UXrTkccbxFExrGsbSjRQAnE95yXHyH9BY8ZbYjSleDTOu08a93csKEKgaaWGaxwGSRkYze9rB3ucGj3pK69FGrzprR9JePqoTgT60tOyB/iDePG6hWKqlJaynfe4yyJ1u3wwTxuiluPjcKFpIx/TeDwXI9ZejmaJxdZXCePY280StG7EgP7xjwXGbPZL7gxrQXOwAwFTTAY7Tl3rINGvuNkETix2TgwkYuLAKgYEuFAMzUbwrc6FLsqV3Sr6LfaLK+M0kY5h3OBafNYS7uVbdoacU+ok7QJoI3EgNdddUAVFDTPeN4WaHQM7mdZcaxpcGN61zYi91GuoxryC7BzThnUUquP8Iv5ix/Gv+X9y66M1jjgjDZr10HBzReoDsIGOdcgc1P2LS0E3/TmY7gDR3NpxHguUz6DtLHFrrNNUSGKojcQZASLjSBRzsDgF6k0DOKX4iwFpdV4LQKOkbddUdl9YpOyceyrEK+KzSrZNSluYdD1wsT54QIrrnNeHUqASKEGhOG0HkqcNA2r7H87P3KtXBuHgi4Nw8FLgQ0sp0Fa/sfzM/cl/QbX9j+Zn7lW7g3DwRcG4eCOAaWT+g2v7H8zP3JHQdqH9k/iafc5Vy4Nw8EXBuHgjgPSwf0m0DOB/IV9y8HR1o+wk/AVBXBuHgi4Nw8EcBaTw0XafsJPwkLI3QlqP9k8y0e9yrtwbh4IuDcPBHAelkOgrX9j+Zn7k26CtX2P5mfuVauDcPBFwbh4I4BpZf6Fa/sT+Nn7kv6Da/sfzM/cq3cG4eCLg3BHAWl91Q0VNFaL8sd1vVuFS5pxJbTJxO9XC026KMXpJGMG9zgPeVxK4NwQ0DZRHANOqz632cOuRXpHcBRg4lzqV5VVcklvEuJqSST3lU5FBwXKyjn8nem/8v4LrZrM+Q3Y2OedzAXHyV01a6OZpXB1qcII9rbzTK4bsCQzvOPBcVIbwSut3BQXiJds6S8yTXpYfZGj4YIY2xRXGMaKBoIw/U7SdtUl8cBjdw8ELvwKumWOQtIc00c0hwO4g1B8Qpt2sz61ETG0NGBuTWG4DGcLxFGDEFuJJxwpBIXQiScOlWta1gh7LHNc2rzeBY5z2XnBovAOklqKCoeMroK27HrPJGZXNZ25Sakvf1eLA3tQghshGJaTkTXGgUChGDLOdc31cRZ4wXh0bu0/GF75JHRihF03pX9sYgU21Jj9Kac66CKz9U1rIL3VUcXOYHve57SSO0DeZnl1QpmQohCWIAQhCYgQhCABCEIAEIQgAQhCABCEIAFuaN0i6Euoxjw67UPF4dk7uLS9h4PctNCAJqPWChxstmI3GPDjgO4eLt+AdYXFrQ6zwPusugvZXOgxFaU7IoBSmO9QqEYMl5NOXn3zZ4a3Gspdwoy7QkbXUbQndgvTdYCDVsELSHh4cxlxzQCKsDhjdNHfiKhkIwCeGtDw1rRFGQ3K9ecR2S00IIO00qTS87ZQBya1ylrm9XFRwcHYE3rzAwl1TjkDsyHGsAhGAZ7fajLI6RwALjUhtaDADCpJ2b0LAhAj/2Q=='
                },
                {
                    nr: 1,
                    name: 'tom',
                    location: 'cell 15.11',
                    photo:
                        'https://vignette.wikia.nocookie.net/avatar/images/7/70/The_Boulder.png/revision/latest?cb=20140317195145'
                },
                {
                    nr: 2,
                    name: 'bob',
                    location: 'cell 2.14',
                    photo:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rtNgkXMZLIib37_o2lpFDfzEBxp9ZKvO6zezVa4zVdWSPWZs'
                },
                {
                    nr: 3,
                    name: 'steve',
                    location: 'cell 1.3',
                    photo:
                        'https://vignette.wikia.nocookie.net/avatar/images/9/97/Scary_prisoner.png/revision/latest?cb=20140215112602'
                },
                {
                    nr: 4,
                    name: 'Elliot',
                    location: 'cell 14.13',
                    photo: 'https://i1.sndcdn.com/avatars-000193549116-zf3or8-t500x500.jpg'
                }
            ]
        };
    }
    render() {
        var box = this.state.data.map((item, i) => {
            return <Card key={i} no={i} data={item} />;
        });
        return (
            <div className="app">
                <div className="container">
                    {box}
                    <div className="buttons">
                        <img
                            className="button"
                            src="https://image.flaticon.com/icons/svg/196/196587.svg"
                            alt="alt image"
                        />
                        <img
                            className="button"
                            src="https://www.shareicon.net/data/128x128/2016/05/20/767751_button_512x512.png"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect('count', actions)(Main);
