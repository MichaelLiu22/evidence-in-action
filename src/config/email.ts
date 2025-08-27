// 匿名邮件发送配置
// 用户填写表单后，系统会自动打开邮件客户端并预填充内容

export const EMAIL_CONFIG = {
  // 接收邮件的邮箱地址
  RECIPIENT_EMAIL: 'Michaelxliu22@gmail.com',
  
  // 邮件模板参数
  TEMPLATE_PARAMS: {
    to_email: 'Michaelxliu22@gmail.com',
    from_name: '', // 从表单获取
    from_email: '', // 从表单获取
    subject: '', // 从表单获取
    message: '', // 从表单获取
  },
};

// 创建 mailto 链接，用于匿名发送
export const createMailtoLink = (params: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = params;
  
  // 构建邮件正文，包含发送者信息
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nThis message was sent through the contact form on your website.`;
  
  return `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// 备选方案：如果用户没有邮件客户端，提供直接联系信息
export const getDirectContactInfo = () => ({
  email: EMAIL_CONFIG.RECIPIENT_EMAIL,
  phone: '(626) 491-9968',
  location: 'Pasadena, CA'
});

// 简历下载路径
export const RESUME_PATH = '/Makayla Resume.pdf';
