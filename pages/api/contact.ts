import { request, Result } from "@/utils";

interface Message {
  email: string;
  name: string;
  message: string;
}

/**
 * @author ginga
 * @since 10/12/2022 下午9:12
 * @param data 信息内容
 * @return {Result}
 **/
const sendMessage = (data: Message) =>
  request({
    url: "message",
    method: "POST",
    data
  })

export default sendMessage;