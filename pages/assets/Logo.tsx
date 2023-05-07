import React from 'react'

interface LogoProp {
  fill?: string
}

export const TechtizLogo = (props: LogoProp) => {
  return (
    <svg width="163" height="36" viewBox="0 0 163 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.472 13.368H50.096V10.2H64.736V13.368H59.36V27H55.472V13.368ZM79.8359 23.88V27H66.8279V10.2H79.5239V13.32H70.6919V16.968H78.4919V19.992H70.6919V23.88H79.8359ZM90.9226 27.288C89.2106 27.288 87.6586 26.92 86.2666 26.184C84.8906 25.432 83.8026 24.4 83.0026 23.088C82.2186 21.76 81.8266 20.264 81.8266 18.6C81.8266 16.936 82.2186 15.448 83.0026 14.136C83.8026 12.808 84.8906 11.776 86.2666 11.04C87.6586 10.288 89.2186 9.912 90.9466 9.912C92.4026 9.912 93.7146 10.168 94.8826 10.68C96.0666 11.192 97.0586 11.928 97.8586 12.888L95.3626 15.192C94.2266 13.88 92.8186 13.224 91.1386 13.224C90.0986 13.224 89.1706 13.456 88.3546 13.92C87.5386 14.368 86.8986 15 86.4346 15.816C85.9866 16.632 85.7626 17.56 85.7626 18.6C85.7626 19.64 85.9866 20.568 86.4346 21.384C86.8986 22.2 87.5386 22.84 88.3546 23.304C89.1706 23.752 90.0986 23.976 91.1386 23.976C92.8186 23.976 94.2266 23.312 95.3626 21.984L97.8586 24.288C97.0586 25.264 96.0666 26.008 94.8826 26.52C93.6986 27.032 92.3786 27.288 90.9226 27.288ZM115.892 10.2V27H112.004V20.112H104.372V27H100.484V10.2H104.372V16.824H112.004V10.2H115.892ZM119.867 10.2H123.755V27H119.867V10.2ZM131.222 13.368H125.846V10.2H140.486V13.368H135.11V27H131.222V13.368ZM156.186 23.832V27H141.498V24.48L150.714 13.368H141.69V10.2H155.826V12.72L146.634 23.832H156.186Z" fill={props.fill ? props.fill : "#032E9B"} />
        <path d="M19.0914 0.95725V2.3978C19.0915 2.64704 18.993 2.88619 18.8175 3.06317C18.642 3.24015 18.4037 3.34062 18.1544 3.3427L10.965 3.40731C10.8326 3.40856 10.702 3.43756 10.5815 3.49244C10.4611 3.54732 10.3535 3.62684 10.2657 3.7259L7.86542 6.43834C7.74474 6.57465 7.66602 6.74293 7.63871 6.92293C7.6114 7.10292 7.63667 7.28697 7.71148 7.45294C7.78629 7.61892 7.90745 7.75974 8.06039 7.85849C8.21334 7.95724 8.39156 8.00971 8.57361 8.00958H15.511C15.7618 8.00958 16.0022 8.10918 16.1795 8.28648C16.3568 8.46377 16.4564 8.70425 16.4564 8.95498V25.5171C16.4563 25.7089 16.5145 25.8962 16.6234 26.0541C16.7323 26.212 16.8866 26.3331 17.0659 26.4011C17.2452 26.4692 17.441 26.4811 17.6273 26.4353C17.8135 26.3894 17.9814 26.288 18.1086 26.1444L21.7181 22.0768C21.871 21.9043 21.9557 21.6819 21.9563 21.4514L22.0016 0.971052C22.0022 0.720957 22.1018 0.481267 22.2788 0.304516C22.4557 0.127765 22.6955 0.0283766 22.9456 0.0281161L40.4531 2.02655e-06C40.6277 -0.000359437 40.7989 0.0476397 40.9479 0.138691C41.0968 0.229743 41.2177 0.360286 41.2969 0.515823C41.3762 0.67136 41.4109 0.84582 41.397 1.01984C41.3832 1.19387 41.3214 1.36065 41.2185 1.5017L34.1529 11.1886C34.0652 11.3089 33.9502 11.4069 33.8175 11.4744C33.6847 11.5419 33.5379 11.5772 33.3889 11.5772H29.8643C29.6135 11.5772 29.373 11.4776 29.1957 11.3003C29.0184 11.123 28.9189 10.8825 28.9189 10.6318V9.11083C28.9189 8.86009 29.0184 8.61962 29.1957 8.44232C29.373 8.26503 29.6135 8.16543 29.8643 8.16543H31.6781C31.8281 8.16524 31.9759 8.12936 32.1092 8.06075C32.2426 7.99215 32.3577 7.89278 32.445 7.77088L34.4912 4.93368C34.593 4.79249 34.6538 4.62593 34.667 4.45238C34.6801 4.27883 34.6451 4.10501 34.5658 3.95008C34.4865 3.79514 34.366 3.66511 34.2175 3.5743C34.069 3.48349 33.8983 3.43544 33.7243 3.43543H26.3465C26.2223 3.43543 26.0994 3.45988 25.9848 3.5074C25.8701 3.55492 25.7659 3.62456 25.6781 3.71236C25.5904 3.80015 25.5208 3.90438 25.4733 4.01908C25.4259 4.13378 25.4015 4.2567 25.4016 4.38083V22.7268C25.4015 22.9571 25.3173 23.1795 25.1648 23.3521L14.6791 35.2375C14.552 35.3814 14.3841 35.4833 14.1978 35.5294C14.0114 35.5756 13.8154 35.5639 13.6358 35.496C13.4562 35.4281 13.3016 35.3071 13.1925 35.1491C13.0834 34.9911 13.0249 34.8037 13.025 34.6117V12.3697C13.025 12.2456 13.0005 12.1227 12.953 12.008C12.9055 11.8933 12.8358 11.7891 12.748 11.7014C12.6602 11.6136 12.556 11.544 12.4413 11.4966C12.3266 11.4491 12.2037 11.4247 12.0796 11.4248H0.945261C0.763051 11.4248 0.584729 11.3721 0.431758 11.2731C0.278787 11.1741 0.157675 11.033 0.0830109 10.8668C0.0083467 10.7006 -0.0166876 10.5163 0.0109046 10.3362C0.0384969 10.1561 0.117543 9.9878 0.238541 9.85156L8.69246 0.330418C8.78119 0.230616 8.89003 0.150732 9.01183 0.0959933C9.13363 0.0412543 9.26565 0.0129086 9.39918 0.0128249H18.146C18.3966 0.0128248 18.6369 0.11229 18.8142 0.289375C18.9915 0.46646 19.0912 0.706684 19.0914 0.95725Z" fill={props.fill ? props.fill : "#032E9B"} />
    </svg>

  )
}
