
/*
试卷宝 
ios151 密钥来源@三岁

[rewrite_local]

https://sjb-api.aizuoye100.com/api/v2/application/get_user url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Shijuanbao.js


[mitm]
hostname = sjb-api.aizuoye100.com

*/
var newResponseBody = "jJNGFz2/vxBzf9iqbJhZxu+rTty2VDBtytor8lrj86Tjdx8HogU/VaI1TN8xnspKc2pJDeH1JhC+tNrl8hGO297hXluHUI5ZY569VFX7jhiCxHdTwjEHzAnra1viVMhOHv+sIoD8MoHoQj6hcthajLMEcxPmGxq9QPyRNKpVVbCq7UVHs9agi8vL0kpSFzMPTdxgk2GKbebn2wi5tLlxlvXtUkfaX7nT0cVbQQR0AVC/uBGqZn4sziQYudmBFXKSOG4m0Y8bo8KHpp6reJNilik9knAgZOGBLSljaN28sljY5i+3Qti4mnNM0ayIp1tM27HTMvT+HZ/OnkAy2pBF9i3Sn4rjhJUt27p9h8wyMYF3EeYKiM8F9fY9e3A63ic0xiGUODA5NyG7w/vWL2e0Rn9YVfVIoV04Ny+/EMlw1/3eRtV+cPgtjWRD8bTFJqxhfEQYok83bYj99eBAFRE2u14rVoRclRWX+4e2P1wQWjBQeNHe5ZtdhuQ3ReUYimgLBlcEjI0upUf+J6JHet5OL8re5R4gadsgjryhpfwdW0oSIaUElBEo4rgiFYybzeZpu4SY4fXt5F6shFHNYUwY7qHeGAbd8KKMns2zCZwI1syRUtXszqLiZJjCEx0fsIYO9UVlW4I54yUTk21Zc1ham1B40d7lm12G5DdF5RiKaAsGVwSMjS6lR/4nokd63k4vt7FZ7l1VAuoSFuo/kfkFevIDxqEI0NDNc/FYtw84y3P9rpuN8u3wzV9kwhN27w4dHkx02f0QwT1TH0eBug2kct2omPzTGXpqzNWBogkiHTSXN+K8oTgOdM7EYFnWWbf6f1hV9UihXTg3L78QyXDX/d5G1X5w+C2NZEPxtMUmrGEJwe6QQjpL6uQQASsbzYlhXv/aOVT6I8xsHEcJsQYBfpE0GHJMDEkptVXbjtYNvbKsaHVv8SMxGlfS0TvkCF1KgtT+mQeddZIsML5jPiLy1LZWBFemoq4ryNwjU0To0y9HPpEvW0l21ZOTpR7yioHEpqg5cj5g5eyJ+3JBu3b92P5SD+Qtcll75x/WusVplN4h1fyf20tSVi4ZKkNvReY5Nc9DkW1tlLcx6ucakXZEaYMDaz3E7K61lyh6lm/TwNVFvJpFLm69K/e0DB4/+RGapUmKN9/es5bSXaTUeYy6Gj9hzmGbeL92bB2uhwgmDQ7fwmnWkzp8zmPfgTur3ZcMTbpgsvVm8VH0rQAM6QG71tZcRPWRjYoa2dZddR1j2j3e4V5bh1COWWOevVRV+44Yd0zXKlbbuk3pYsOunGRY/H+3V0IXtCyBmRinhxNyxp25WTh4IvZQ3c1p5feXZPZ8P2HOYZt4v3ZsHa6HCCYNDk8q+nj7YH3rKLQ/A8CIr2xNumCy9WbxUfStAAzpAbvWp2ZrhcjK1n9VcEOxC0Ai/TXPQ5FtbZS3MernGpF2RGmeiLMA1pveintZmhvCjVzZRbyaRS5uvSv3tAweP/kRmqeacQPhfMthtfa3Mygg+HhdbMbeScuvxHZt4+jPl+QDX8O9i9r97xDy/uaWtnp2WfsDk3lgn3ain07I5RcUoVNy5id1bEDn1chnek4Oy+vY9LvAfmWypKopcCAc/at78dOpUKr3Bf/W/a6IogueyqRnw520OEyyqNOyUzm5G672CaXsFM/56PUdWkANIdJColXLuI/9259LLhLX4/twYaETF6MBFDrIKejpnWfzJ6eh/vJ8Zx3CgmqQcH5td0ntxZAIIAEd1pusQwxVon6ObUcos4uPfjfF6B+QlD6BClr/7/52ii4+e6kT1ACJB1zDCOka+wZWLYlcREEmlU0184DDiNjEZ66GhzGweFxkRZj0PDNyCRNuxV7iRErrioGmMyulsIfK6+Kl3zpnUh3GUfUos4uPfjfF6B+QlD6BClr/7/52ii4+e6kT1ACJB1zDCD4YipPPNksUQXRlwGO4uGX/6209H2ppMVmMLD1BiDGKB1cKGg2kRBFqjUdHQw301SUcLhRc2xrYZmqM/3VhlUNbtnQV+WYYEK/7zHRLumJgcU+dO7PHFjf4hugiaDPt1gMZIphvcmnl6ypE8wtUOyvm4DoghGV0BCse/cmMzgKf4wGGG2HqkG+7T5zBFRMcONxTgr7UTGePK6YQTOe2Nl+/PBdKBT4mB0dUJ7htTbnKSzb8jyyg+5xP4XZjNPODaYW4HRpWrVSqwlBYOPA5egxljLSg+elSkTDwhl2hMlQc6g+Hywyzcfr9LFCsPr5g7wmba7VNHptwd9zsnoV7SJjsMWkZuc4CVei+oSVi2VAIsFEDl+9DppLyNkYvCBZiCEtFaZRw0AW+jaTU/HQSnJrJtbcD/wiLtUrkhHLllRR8RhmElPGQlGRSxbgMStcdnEgc6xGrLEl7Bg08clstWhQzbpqU0sCI3sz6NguEwHF+dDRF+IEOnM7tn6RwZ1hbPIxIsP8wFQDWObRUCxfLE8Ik1CCVl/LOYR6wtXzPYUCGE27IvjzLSx8YO2cvUC0iF3BXfHAgRNr3qNKsdxNzC1eHzl63dZVeExNVAF3Y1Gd2ERVCZnlAm04hlKE9TjcoiZEn47MFCfKYHgDj0fF11X9E4f53jSVC2yF8mgOZrtfBEXFFA6qXE7MlOGzki8CRteKrwyX1OvHq8G/wrvv200Su5tkyq1yW/HQ4+6T8t494ENOx1F5QMeWntZtX6ytx+kPDQXDXd/0a4VdYwWH4srgRSJQLJzhZkL/77f8PU6DCVOkShRopB81rIbgYDXLpXdw/wAJVxi3EIsc8kCKbA5vTkkjWA01cUDeFvViUbQmEmdDrYnzzLc9GE59WdHXxmz4b17o+G4ROOh3oLRgqSh/d8cFOXuCo8Iy6rbYPD3XC+4bYo8audllNDgL11N2ioXCe2pFyNYykwWqmZezqpVYgf7/AycLNaRjN+58639kehpcfduvqngXGwR4b09CqFz3r+gCZMrhxh1tqZHz5F9BzhMaiT1KfqkAy/1nzFACPcV4XTXcrhgLVp0hJ1jn32tHUPNukP6m8GEh5v8zHY37/Cj74u7Sw54rHq6J6vZ1PtK1mg4I5djv93FIKUQr/uFvwE6J1ST5pnWbOFCfF57C2P3WY8QJkQJSZGvibtG1EXzCrgoT32CrkzUWWjDaOM4W3b7LuFlpqh6uA5o//xrRwV3xwIETa96jSrHcTcwtXh85et3WVXhMTVQBd2NRndhEVQmZ5QJtOIZShPU43KImRJ+OzBQnymB4A49HxddV/ROH+d40lQtshfJoDma7XwVDqKiI59pcyoIiEHUouWA/xjMPMUmR7aLNtKo6H8gkz6GWLEt9omyYij6xvsPrzHj79A1oydKWrzhRudxIj8gNulK2iOOt7KQdcUX/e/BO2HU/e+mI+2KFVe7Kp++gIgwIVgCrxZQR2effjtywB4xVeChZOxCgAQAU7mbixftLTM0KyiH8foM1XQmvA5PGValPsNKrLiqFVRFjAjUnAN1aI5DmJp3yLJrFf9Lziqt8t9hmD4TRiOWLHMiOrUcxbzOorvb4Qr2INmUP7cHcNf8k5VREE72Ka/6csC9wYOZf9TlsMQSbqNIe7Jkgjob4AL5Sw3aeObxRbA15W6UbhVOg85HhoFVkaf4hpMSQ5EhNc/vJ8Zx3CgmqQcH5td0ntxTRN8RIkZ4FCwX/48e1MMaS7hDoWTY8EqlS2olLNVnvNUunKu/5gcirL4uPDJ26RjT5t1CHIteDHsdFUuBk+qwGOBxc4rWlPgZN9oFSQ6kuSsFEDl+9DppLyNkYvCBZiCAp+zX69hrONO8NprZHTbtXJtbcD/wiLtUrkhHLllRR8RhmElPGQlGRSxbgMStcdnEgc6xGrLEl7Bg08clstWhQM55ewp1CKtjN2lyweZ1GgdDRF+IEOnM7tn6RwZ1hbPCNKa79dQOvOIyphZajqHhTad79GCKptYU1EVLfVsPYXW7Z0FflmGBCv+8x0S7piYFNLQCk+o8+OPlVpMOkDvUow535GYZuUzSYpi0oY58TOwfFZ7XjnQ57s36A4NU22XOka+wZWLYlcREEmlU0184CeqSKcVPf5yDXixhb8BoklqZq0tO+GoiqB2o1mjmUMD6g6LdTtAaKDTSf7x+jdtSz50d2p0C+NypwI//wDrkbae0ocumwMF6j8IivbAEuBagMZIphvcmnl6ypE8wtUOysytORdLwRPonSAAI0qeLlhe0ocumwMF6j8IivbAEuBaneZZlcMNrEVkSxJIyxyz/1fWgAtyejieoXITFPMGjWjNE+NkmXPmi7fHWWg9fUyPfMwHUyvDP4wu3qgtxmiLUPFziNrkVaH0TE2DD7HT6UTswGIWhZ16bxy2JBwC1+hPn7fjqLUZjkjjnsoG18FjXyNobsASw8g3OjwUSZaPmKF9aDfOJBOQY2por9RTvssGsMlvt8GNBCA1SZJWbwzxeT40bp6DHkhhNM8XOAiJ1lTu9l87IBLuLNXh//AcabQS9k2c7vomR3ecfHqvHw8oleQYhX5Cg1YNhT+aez7S/YxPOR4aBVZGn+IaTEkORITXFwYD92AtgUC6g2UmoXBuK8ntiQE9jvH3rzl5U7B+/sQ/ZlwLYHSZzpzToLxTBpsmJ28sggD3Dn8HWtDBs0MP600kXoC1eD8nm2oxaZtMtK3sEoT/h0VNORcfJvQ7ILRKvIBYi8JCw3O+0xo4vxZGNE=";

$done({ body: newResponseBody });
