<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Instagram Graph API configuration
// Replace these with your actual credentials
$instagram_business_account_id = getenv('INSTAGRAM_ACCOUNT_ID') ?: '17841477979204687';
$access_token = getenv('INSTAGRAM_ACCESS_TOKEN') ?: 'IGAAUHyyHF8n5BZAFR2bDNlbDBiQmxBWGx2MkZAFMHdJMVFQRkdJN3JCRHBjLUt1TnZAYQ3hVRkgwNzBmRk5qOFBkckZAqTkY5dTFsLVA2QnF5Tlg0UkNSZAy1NLWdrZAjNhVGhtR1pTajdqOU9HUHg2dHFHN0R6SnJ4UWxiTFQyTzEwawZDZD';

// Fields to retrieve from Instagram posts
$fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username';

// Build the API URL
$url = "https://graph.instagram.com/v18.0/{$instagram_business_account_id}/media";
$url .= "?fields={$fields}";
$url .= "&limit=10";
$url .= "&access_token={$access_token}";

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

// Execute the request
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error = curl_error($ch);
curl_close($ch);

// Handle errors
if ($curl_error) {
    http_response_code(500);
    echo json_encode([
        'error' => true,
        'message' => 'cURL error: ' . $curl_error
    ]);
    exit;
}

if ($http_code !== 200) {
    http_response_code($http_code);
    echo json_encode([
        'error' => true,
        'message' => 'Instagram API returned error',
        'status_code' => $http_code,
        'response' => json_decode($response)
    ]);
    exit;
}

// Parse and return the response
$data = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(500);
    echo json_encode([
        'error' => true,
        'message' => 'Failed to parse Instagram API response'
    ]);
    exit;
}

// Return successful response
echo json_encode([
    'error' => false,
    'data' => $data['data'] ?? [],
    'paging' => $data['paging'] ?? null
]);
