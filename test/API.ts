export const guestAPI: any = [
    { path: '/brand/auth', method: 'post', name: 'BRAND: Create an authentication token for brand' },
    { path: '/brand/forgot-password', method: 'post', name: 'BRAND: Request reset password' },
    { path: '/brand/forgot-password', method: 'get', name: 'BRAND: Check reset password token' },
    { path: '/brand/reset-password', method: 'post', name: 'BRAND: Reset password' },
    { path: '/package/public-packages', method: 'get', name: 'PACKAGE: Get all landing page packages' },
    { path: '/package/public-packages/{slug}', method: 'get', name: 'PACKAGE: Get all landing page packages' },
    {
        path: '/package/public-packages/{id}/cover',
        method: 'get',
        name: 'PACKAGE: Get cover of public package by specified ID'
    },
    { path: '/user/auth', method: 'post', name: 'USER: Create an authentication token' },
    { path: '/rbac/update-rbac', method: 'get', name: 'RBAC: Update RBAC' },
    { path: '/social/socials/facebook/authenticate', method: 'post', name: 'SOCIAL: Authentication Facebook kol' },
    { path: '/kol/register/social', method: 'post', name: 'KOL: Register Kol' },
    { path: '/kol/login', method: 'post', name: 'KOL: kol login' },
    { path: '/kol/forgot-password', method: 'put', name: 'KOL: Forgot password' },
    { path: '/kol/recovery-password', method: 'put', name: 'KOL: kol recovery password' },
    { path: '/kol/job-attachments/{job_id}/{attachment_name}', method: 'get', name: 'KOL: Render attachment image' },
    { path: '/kol/send-mail-verify', method: 'post', name: 'KOL: Send mail verify' },
    { path: '/kol/mail-verify', method: 'post', name: 'KOL: kol verify email' },
    { path: '/kol/kol/post/{job_id}/attachment/{file_name}', method: 'get', name: 'KOL: View attachment post' },
    { path: '/attachment/attachments', method: 'post', name: 'ATTACHMENT: Upload attachment to temporary' }
];

export const GuestAndAuthenOnlyAPI = [
    { path: '/brand/auth', method: 'post', name: 'BRAND: Create an authentication token for brand' },
    { path: '/brand/forgot-password', method: 'post', name: 'BRAND: Request reset password' },
    { path: '/brand/forgot-password', method: 'get', name: 'BRAND: Check reset password token' },
    { path: '/brand/reset-password', method: 'post', name: 'BRAND: Reset password' },
    { path: '/brand/auth/check', method: 'get', name: 'BRAND: Check if token is still valid' },
    { path: '/package/public-packages', method: 'get', name: 'PACKAGE: Get all landing page packages' },
    { path: '/package/public-packages/{slug}', method: 'get', name: 'PACKAGE: Get all landing page packages' },
    {
        path: '/package/public-packages/{id}/cover',
        method: 'get',
        name: 'PACKAGE: Get cover of public package by specified ID'
    },
    { path: '/user/auth', method: 'post', name: 'USER: Create an authentication token' },
    { path: '/user/auth/check', method: 'get', name: 'USER: Check if token is still valid' },
    { path: '/rbac/update-rbac', method: 'get', name: 'RBAC: Update RBAC' },
    { path: '/metadata/occupations', method: 'get', name: 'METADATA: Get all occupations' },
    { path: '/metadata/topics', method: 'get', name: 'METADATA: Get all topics' },
    { path: '/metadata/tag-colors', method: 'get', name: 'METADATA: Get all tag colors of public package' },
    { path: '/metadata/provinces', method: 'get', name: 'METADATA: Get all province data' },
    { path: '/metadata/suggest-prices', method: 'get', name: 'METADATA: Get all province data' },
    { path: '/metadata/faq/kol', method: 'get', name: 'METADATA: Get all kol faq' },
    { path: '/metadata/banks', method: 'get', name: 'METADATA: Get all bank' },
    { path: '/social/socials/facebook/authenticate', method: 'post', name: 'SOCIAL: Authentication Facebook kol' },
    { path: '/kol/register/social', method: 'post', name: 'KOL: Register Kol' },
    { path: '/kol/login', method: 'post', name: 'KOL: kol login' },
    { path: '/kol/forgot-password', method: 'put', name: 'KOL: Forgot password' },
    { path: '/kol/recovery-password', method: 'put', name: 'KOL: kol recovery password' },
    { path: '/kol/job-attachments/{job_id}/{attachment_name}', method: 'get', name: 'KOL: Render attachment image' },
    { path: '/kol/send-mail-verify', method: 'post', name: 'KOL: Send mail verify' },
    { path: '/kol/mail-verify', method: 'post', name: 'KOL: kol verify email' },
    { path: '/kol/kol/post/{job_id}/attachment/{file_name}', method: 'get', name: 'KOL: View attachment post' },
    { path: '/kol/kol', method: 'get', name: 'KOL: kol info' },
    { path: '/kol/kol/password', method: 'put', name: 'KOL: kol change password' },
    { path: '/kol/kol/basic', method: 'put', name: 'KOL: Update basic information' },
    { path: '/kol/kol/auth', method: 'post', name: 'KOL: Check token' },
    { path: '/kol/kol/payment', method: 'put', name: 'KOL: Update payment info' },
    { path: '/kol/kol/jobs', method: 'put', name: 'KOL: Update job' },
    { path: '/kol/kol/share-stories', method: 'put', name: 'KOL: Update share story' },
    { path: '/kol/kol/price', method: 'put', name: 'KOL: Update price' },
    { path: '/kol/kol/invites', method: 'get', name: 'KOL: Get list invite' },
    { path: '/kol/kol/invites/{id}', method: 'get', name: 'KOL: Get list invite' },
    { path: '/kol/kol/invites/{id}/join', method: 'put', name: 'KOL: Join job' },
    { path: '/kol/kol/invites/{invite_id}/reject', method: 'put', name: 'KOL: Send invite job to kol' },
    { path: '/kol/kol/jobs/running', method: 'get', name: 'KOL: Get list Job' },
    { path: '/kol/kol/jobs/completed', method: 'get', name: 'KOL: Get list Job' },
    { path: '/kol/kol/jobs/{id}', method: 'get', name: 'KOL: Get Job' },
    { path: '/kol/kol/post/{job_id}/content', method: 'put', name: 'KOL: Running content post' },
    { path: '/kol/kol/post/{job_id}/link', method: 'put', name: 'KOL: Running link post' },
    { path: '/attachment/attachments', method: 'post', name: 'ATTACHMENT: Upload attachment to temporary' },
    { path: '/request-payment/kol/request-payments', method: 'get', name: 'REQUESTPAYMENT: Create payment request' },
    { path: '/request-payment/kol/request-payments', method: 'post', name: 'REQUESTPAYMENT: Create payment request' },
    {
        path: '/request-payment/kol/request-payments/check',
        method: 'get',
        name: 'REQUESTPAYMENT: Create payment request'
    }
];
